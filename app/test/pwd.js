var bcrypt = require("bcryptjs");
//let pwd = bcrypt.hashSync("admin", bcrypt.genSaltSync(10), null);
let data = "user";
let pwd = bcrypt.hashSync(data, bcrypt.genSaltSync(10), null);

let newpass = bcrypt.compareSync("user", pwd);
console.log(pwd, newpass);

