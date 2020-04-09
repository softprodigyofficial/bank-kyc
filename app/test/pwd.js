var bcrypt = require("bcryptjs");
//let pwd = bcrypt.hashSync("admin", bcrypt.genSaltSync(10), null);
let pwd = bcrypt.hashSync("user", bcrypt.genSaltSync(10), null);

let newpass = bcrypt.compareSync("user", "$2a$10$.Dz4bGgi48uLDY/3SENiQO8BAT8n8kve8nIrNcORD3SQGu6ixUSFG");
console.log(pwd, newpass);

