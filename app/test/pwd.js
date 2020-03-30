var bcrypt = require("bcryptjs");
//let pwd = bcrypt.hashSync("admin", bcrypt.genSaltSync(10), null);
let pwd = bcrypt.hashSync("user", bcrypt.genSaltSync(10), null);
console.log(pwd);