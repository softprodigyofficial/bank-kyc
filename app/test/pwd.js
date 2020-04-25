var bcrypt = require("bcryptjs");
//let pwd = bcrypt.hashSync("admin", bcrypt.genSaltSync(10), null);
let data = "user";
let pwd = bcrypt.hashSync(data, bcrypt.genSaltSync(10));

let newpass = bcrypt.compareSync(data, pwd);
console.log(pwd, newpass);


