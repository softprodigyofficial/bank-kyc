var bcrypt = require("bcryptjs");
let pwd = bcrypt.hashSync("admin", bcrypt.genSaltSync(10), null);
console.log(pwd);