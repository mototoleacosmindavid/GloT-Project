const jwt = require("jsonwebtoken");

const secret = "secret";
const whitelist = [];

class JwtService {
  GetByUsername(username) {
    try {
      const randomId = makeid(10);
      const payload = {
        username: username,
        uniqueId: randomId,
      };
      const res = jwt.sign(payload, secret, { expiresIn: "1h" });
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  VerifyAndDecode(token) {
    try {
      const res = jwt.verify(token, secret);
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  ExtractUniqueId(token) {
    try {
      const decoded = jwt.verify(token, secret);
      if (decoded === null || decoded === undefined) {
        return null;
      }
      return decoded.uniqueId;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  extractByCookieKey(cookie, cookieKey) {
    return cookie
      .split(";")
      .map(x => x.trim())
      .map(x => x.split("="))
      .filter(x => x[0] === cookieKey)[0][1];
  }
}

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

module.exports = JwtService;
