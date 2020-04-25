pragma solidity 0.5.12;

contract KYC {

    struct Customer {
        bytes32 username;
        bytes32 data;
        uint rating;
        uint votes;
        address bank;
    }

    struct Bank {
        bytes32 name;
        address ethAddress;
        uint rating;
        uint kycCount;
        bytes32 regNumber;
    }

    struct KycReq {
        bytes32 username;
        address bank;
        bytes32 data;
        bool isAllowed;
    }

    mapping (bytes32 => bytes32) internal custPwds; // store customer data Passwords
    mapping(address => KycReq[]) public bankRequests; // customer requests bankwise
    Customer[] public customers; // verified customers
    Customer[] public finalCustomers; // verified customers with total votes > 0.5
    mapping(bytes32 => address[]) public b2cRatings; // mapping of which all banks have upvotes a particular customer
    mapping(address => address[]) public b2bRatings; // mapping of which all banks have upvotes a particular bank
    mapping(address => Bank) public banks; // mapping of bank address to its full details
    address[] public bankAddresses; // list of bank addresses
    address public owner; // owner of the contract

    constructor() public {
        owner = msg.sender;
    }

    // admin begins ***
    // checks if msg.sender is owner of the contract
    modifier onlyOwner {
        require(msg.sender == owner, "Only the contract owner can perform this operation");
        _;
    }

    modifier newBank(address e, bytes32 rn) {
        bool isUni = true;
        for (uint i=0; i < bankAddresses.length; i++) {
            if (bankAddresses[i] == e || banks[bankAddresses[i]].regNumber == rn) {
                isUni = false;
            }
        }
        require(isUni, "Bank already present!");
        _;
    }

    // adds a new bank
    function addBank(bytes32 n, address e, bytes32 rn) external onlyOwner newBank(e, rn) returns(bool) {
        banks[e] = Bank({name: n, ethAddress:e, rating: 0, kycCount: 0, regNumber:rn});
        bankAddresses.push(e);
        redoB2BRatings(); // update bank ratings and bankRequests' isAllowed here
        redoFinalCustomers(); // update customers and finalCustomers
        return true;
    }

    // removes an existing bank
    function removeBank(address a) external onlyOwner returns(bool) {
        delete banks[a];
        delete b2bRatings[a];
        removeB2CVotes(a); // remove bank to customer upvotes given by the bank
        removeB2BVotes(a); // remove bank to bank upvotes given by the bank
        // remove bank from bankAddresses
        for (uint i=0; i < bankAddresses.length; i++) {
            if (bankAddresses[i] == a) {
                bankAddresses = removeArrIdx(bankAddresses, i);
            }
        }
        redoB2BRatings(); // re-calculate bank ratings
        redoFinalCustomers(); // update customers and finalCustomers
        return true;
    }
    // *** admin ends

    // bank begins ***
    // checks if msg.sender is a registeres bank
    modifier onlyBank {
        bool isBank = false;
        for (uint i=0; i < bankAddresses.length; i++) {
            if (bankAddresses[i] == msg.sender) {
                isBank = true;
            }
        }
        require(isBank, "Only a bank can perform this operation");
        _;
    }

    // checks if same data is not present in either customers or finalCustomers list
    modifier uniData(bytes32 data) {
        bool isUni = true;
        for (uint i=0; i < customers.length; i++) {
            if (customers[i].data == data) {
                isUni = false;
                break;
            }
        }
        for (uint i=0; i < finalCustomers.length; i++) {
            if (finalCustomers[i].data == data) {
                isUni = false;
                break;
            }
        }
        require(isUni, "Customer data is not unique in customers!");
        _;
    }

    // checks if same username / data is not present in either customers or finalCustomers list
    modifier uniCusData(bytes32 user, bytes32 data) {
        bool isUni = true;
        for (uint i=0; i < customers.length; i++) {
            if (customers[i].data == data) {
                isUni = false;
                break;
            }
            if (customers[i].username == user) {
                isUni = false;
                break;
            }
        }
        for (uint i=0; i < finalCustomers.length; i++) {
            if (finalCustomers[i].data == data) {
                isUni = false;
                break;
            }
            if (finalCustomers[i].username == user) {
                isUni = false;
                break;
            }
        }
        require(isUni, "Customer username / data is not unique in customers!");
        _;
    }

    // checks if same data is not present in bankRequests of same bank
    // a customer can go to multiple banks to open account so both banks can add respective kycRequests -
    // - but the customer will be added to customers list only once
    modifier uniBankReq(bytes32 user, bytes32 data) {
        bool isUni = true;
        for (uint i=0; i < bankRequests[msg.sender].length; i++) {
            if (bankRequests[msg.sender][i].data == data) {
                isUni = false;
                break;
            }
            if (bankRequests[msg.sender][i].username == user) {
                isUni = false;
                break;
            }
        }
        require(isUni, "Customer is not unique in requests!");
        _;
    }

    // checks if given customer belongs to given bank in customers / finalCustomers
    modifier myCus(bytes32 user, address a) {
        bool mine = false;
        for (uint i=0; i < customers.length; i++) {
            if (customers[i].bank == a) {
                mine = true;
                break;
            }
        }
        if (mine == false) {
            for (uint i=0; i < finalCustomers.length; i++) {
                if (finalCustomers[i].bank == a) {
                    mine = true;
                    break;
                }
            }
        }
        require(mine, "Customer is not yours!");
        _;
    }

    // verifies customer request's isAllowed
    modifier alwdCus(bytes32 user, bytes32 data) {
        bool isAllowed = false;
        for (uint i=0; i < bankAddresses.length; i++) {
            for (uint j=0; j < bankRequests[bankAddresses[i]].length; j++) {
                KycReq memory obj = bankRequests[bankAddresses[i]][j];
                if (obj.username == user && obj.data == data) {
                    if (obj.isAllowed) {
                        isAllowed = true;
                        break;
                    }
                }
            }
        }
        require(isAllowed, "Customer is not requested by trusted bank!");
        _;
    }

    //check customer pwd
    modifier cAuth(bytes32 u, bytes32 p) {
        require(p == custPwds[u], "Access not granted!");
        _;
    }

    // check duplicate bank to customer vote
    modifier uniCusVote(bytes32  u, address a) {
        bool canVote = true;
        for (uint i = 0; i < b2cRatings[u].length; i++) {
            if (b2cRatings[u][i] == a) {
                canVote = false; // cannot re-vote
            }
        }
        require(canVote, "Cannot re-vote!");
        _;
    }

    function addRequest(bytes32 u, bytes32 d) external onlyBank uniCusData(u, d) uniBankReq(u, d) returns (uint) {
        bool isAllowed = banks[msg.sender].rating > 50;
        bankRequests[msg.sender].push(KycReq({username: u, bank: msg.sender, data: d, isAllowed: isAllowed}));
        return 1;
    }

    function removeRequest(bytes32 u, bytes32 d) external onlyBank returns (uint) {
        uint toreturn = 0;
        for (uint i=0; i < bankRequests[msg.sender].length; i++) {
            if (bankRequests[msg.sender][i].data == d && bankRequests[msg.sender][i].username == u) {
                delete bankRequests[msg.sender][i];
                toreturn = 1;
            }
        }
        return toreturn;
    }

    function upvoteBank(address a) external onlyBank returns (uint) {
        uint canVote = 1;
        for (uint i=0; i < b2bRatings[a].length; i++) {
            if (b2bRatings[a][i] == msg.sender) {
                canVote = 0; // cannot re-vote
            }
        }

        //** allow self-vote **//
        // if (msg.sender == a) {
        //     canVote = 0; // cannot self vote
        // }

        if (canVote == 1) {
            b2bRatings[a].push(msg.sender);

            // since fixed types are not yet supported so multiplying the value by 100
            banks[a].rating = ((b2bRatings[a].length*100) / bankAddresses.length);

            // update bankRequests' isAllowed here
            for (uint i=0; i < bankRequests[a].length; i++) {
                bankRequests[a][i].isAllowed = banks[a].rating > 50;
            }
        }

        return canVote;
    }

    function setCustPassword(bytes32 u, bytes32 p) external onlyBank returns (uint) {
        custPwds[u] = p;
        return 1;
    }

    // customer data should be unique
    // customer's request should be allowed to process
    // msg.sender should be a trusted bank
    function addCustomer(bytes32 u, bytes32 d) external onlyBank uniCusData(u, d) alwdCus(u, d) returns (uint) {
        uint toreturn = 0;
        bool isAllowed = banks[msg.sender].rating > 50;
        if (isAllowed) {
            banks[msg.sender].kycCount = banks[msg.sender].kycCount+1;
            customers.push(Customer({username: u, data: d, rating: 0, votes: 0, bank: msg.sender}));
            // set default pwd for customer to 0
            custPwds[u] = 0x3000000000000000000000000000000000000000000000000000000000000000;
            for (uint i=0; i < bankAddresses.length; i++) {
                for (uint j=0; j < bankRequests[bankAddresses[i]].length; j++) {
                    KycReq memory obj = bankRequests[bankAddresses[i]][j];
                    if (obj.username == u && obj.data == d) {
                        delete bankRequests[bankAddresses[i]][j];
                        toreturn = 1;
                        // break; // do not break, remove the same customer's kyc request from all bankRequests
                        // there might be a case that a customer requested kyc with 2 banks, 1 trusted and other not
                    }
                }
            }
        }
        return toreturn;
    }

    // only the bank who last modified the customer can remove the customer
    function removeCustomer(bytes32 user) external onlyBank myCus(user, msg.sender) returns (uint) {
        uint toreturn = 0;
        for (uint i=0; i < customers.length; i++) {
            if (customers[i].username == user) {
                delete customers[i];
                toreturn = 1;
                break;
            }
        }
        // if not found in customers look in finalCustomers
        if (toreturn == 0) {
            for (uint i=0; i < finalCustomers.length; i++) {
                if (finalCustomers[i].username == user) {
                    delete finalCustomers[i];
                    toreturn = 1;
                    break;
                }
            }
        }
        return toreturn;
    }

    function modifyCustomer(bytes32 u, bytes32 p, bytes32 d) external onlyBank cAuth(u, p) uniData(d) returns (uint) {
        uint toreturn = 0;
        for (uint i=0; i < customers.length; i++) {
            if (customers[i].username == u) {
                customers[i].data = d;
                customers[i].bank = msg.sender;
                customers[i].votes = 0;
                customers[i].rating = 0;
                toreturn = 1;
                break;
            }
        }
        // if not found in customers look in finalCustomers
        if (toreturn == 0) {
            for (uint i=0; i < finalCustomers.length; i++) {
                if (finalCustomers[i].username == u) {
                    // customer is no more a finalCustomer now
                    delete finalCustomers[i];
                    customers.push(Customer({username:u, data:d, bank:msg.sender, votes:0, rating:0}));
                    toreturn = 1;
                    break;
                }
            }
        }
        return toreturn;
    }

    function upvoteCust(bytes32 u) external onlyBank uniCusVote(u, msg.sender) returns (uint) {
        b2cRatings[u].push(msg.sender);
        redoFinalCustomers();
        return 1;
    }

    function viewCustomer(bytes32 user, bytes32 p) external onlyBank cAuth(user, p) view returns (bytes32) {
        bytes32 toreturn = 0x00;
        for (uint i=0; i < customers.length; i++) {
            if (customers[i].username == user) {
                toreturn = customers[i].data;
                break;
            }
        }
        // if not found in customers look in finalCustomers
        if (toreturn == 0x00) {
            for (uint i=0; i < finalCustomers.length; i++) {
                if (finalCustomers[i].username == user) {
                    toreturn = finalCustomers[i].data;
                    break;
                }
            }
        }
        return toreturn;
    }

    function getCustRating(bytes32 user) external onlyBank view returns (uint) {
        uint toreturn = 0;
        for (uint i=0; i < customers.length; i++) {
            if (customers[i].username == user) {
                toreturn = customers[i].rating;
                break;
            }
        }
        // if not found in customers look in finalCustomers
        if (toreturn == 0) {
            for (uint i=0; i < finalCustomers.length; i++) {
                if (finalCustomers[i].username == user) {
                    toreturn = finalCustomers[i].rating;
                    break;
                }
            }
        }
        return toreturn;
    }

    function accessHistory(bytes32 user) external onlyBank view returns (address) {
        address toreturn = 0x0000000000000000000000000000000000000000;
        for (uint i=0; i < customers.length; i++) {
            if (customers[i].username == user) {
                toreturn = customers[i].bank;
                break;
            }
        }
        // if not found in customers then check in finalCustomers
        if (toreturn == 0x0000000000000000000000000000000000000000) {
            for (uint i=0; i < finalCustomers.length; i++) {
                if (finalCustomers[i].username == user) {
                    toreturn = finalCustomers[i].bank;
                    break;
                }
            }
        }
        return toreturn;
    }

    function getBank(address a) external view returns(bytes32, address, uint, uint, bytes32) {
        return (banks[a].name, banks[a].ethAddress, banks[a].rating, banks[a].kycCount, banks[a].regNumber);
    }

    function getBankRating(address a) external view returns (uint) {
        return  banks[a].rating;
    }

    //get bank requests step 1 as we cannot return an array of struct so this is a way around
    function getBankRequestsNum(address a) external onlyBank view returns(uint) {
        return bankRequests[a].length;
    }

    //get bank requests step 2 as we cannot return an array of struct so this is a way around
    function getBankRequest(address a, uint i) external onlyBank view returns (bytes32, bytes32, address, bool) {
        KycReq memory obj = bankRequests[a][i];
        return (obj.username, obj.data, obj.bank, obj.isAllowed);
    }
    // *** bank ends

    function removeArrIdx(address[] memory array, uint index) internal pure returns(address[] memory) {
        if (index >= array.length) return array;

        address[] memory arrayNew = new address[](array.length-1);
        for (uint i = 0; i < arrayNew.length; i++) {
            if (i != index && i < index) {
                arrayNew[i] = array[i];
            } else {
                arrayNew[i] = array[i+1];
            }
        }
        delete array;
        return arrayNew;
    }

    function removeB2CVotes(address a) internal returns (uint) {
        for (uint i=0; i < customers.length; i++) {
            for (uint j=0; j < b2cRatings[customers[i].username].length; j++) {
                if (b2cRatings[customers[i].username][j] == a) {
                    b2cRatings[customers[i].username] = removeArrIdx(b2cRatings[customers[i].username], j);
                }
            }
        }
        for (uint i=0; i < finalCustomers.length; i++) {
            for (uint j=0; j < b2cRatings[finalCustomers[i].username].length; j++) {
                if (b2cRatings[finalCustomers[i].username][j] == a) {
                    b2cRatings[finalCustomers[i].username] = removeArrIdx(b2cRatings[finalCustomers[i].username], j);
                }
            }
        }
        redoFinalCustomers();
    }

    function redoFinalCustomers() internal returns (uint) {
        for (uint i=0; i < customers.length; i++) {
            customers[i].votes = b2cRatings[customers[i].username].length;
            customers[i].rating = (customers[i].votes * 100) / bankAddresses.length;
            if (customers[i].rating > 50) {
                finalCustomers.push(customers[i]);
                delete customers[i];
            }
        }
        for (uint i=0; i < finalCustomers.length; i++) {
            finalCustomers[i].votes = b2cRatings[finalCustomers[i].username].length;
            finalCustomers[i].rating = (finalCustomers[i].votes * 100) / bankAddresses.length;
            if (finalCustomers[i].rating <= 50) {
                customers.push(finalCustomers[i]);
                delete finalCustomers[i];
            }
        }
        return 1;
    }

    function redoB2BRatings() internal returns (uint) {
        for (uint i=0; i < bankAddresses.length; i++) {
            banks[bankAddresses[i]].rating = (b2bRatings[bankAddresses[i]].length*100 / bankAddresses.length);
            for (uint j=0; j < bankRequests[bankAddresses[i]].length; j++) {
                bankRequests[bankAddresses[i]][j].isAllowed = banks[bankAddresses[i]].rating > 50;
            }
        }
        return 1;
    }

    function removeB2BVotes(address a) internal returns (uint) {
        for (uint i=0; i < bankAddresses.length; i++) {
            for (uint j=0; j < b2bRatings[bankAddresses[i]].length; j++) {
                if (b2bRatings[bankAddresses[i]][j] == a) {
                    b2bRatings[bankAddresses[i]] = removeArrIdx(b2bRatings[bankAddresses[i]], j);
                }
            }
        }
        return 1;
    }

}
