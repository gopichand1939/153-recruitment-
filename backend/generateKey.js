const crypto = require("crypto");

const generateJWTSecret = () => {
  return crypto.randomBytes(32).toString("base64");
};

console.log("Generated JWT Secret Key:", generateJWTSecret());
