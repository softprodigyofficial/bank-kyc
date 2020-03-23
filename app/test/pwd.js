var bcrypt = require("bcryptjs");
let pwd = bcrypt.hashSync("admin", bcrypt.genSaltSync(10), null);
console.log(pwd);
// $2a$10$LeyZ3wjnNsWxcw9NZVnp6OuKIwN7D/4ILKDNqgytwSSqihjShgKse
