const Router = require("../RoutingEngine/Router");
const router = new Router();
const UsersRepository = require("../Services/Repositories/UsersRepository");
const crypto = require("crypto");
const HttpStatusCodes = require("../RoutingEngine/HttpStatusCodes");
const JwtService = require("../Services/JwtService");

router.post("/login", async (req, res) => {
  try {
    const repo = new UsersRepository();
    const body = await req.FetchBodyJson();
    const username = body.username;
    const passwordHash = GetHash(body.password);
    const result = await repo.GetUserByCredentials(username, passwordHash);
    if (result.length === 0) {
      return res.sendJson(
        { error: "Invalid username or password" },
        HttpStatusCodes.Unauthorized
      );
    }
    const user = result[0];
    const jwtService = new JwtService();
    const jwt = jwtService.GetByUsername(username);
    const uniqueId = jwtService.ExtractUniqueId(jwt);
    repo.WhitelistUniqueId(uniqueId);
    const cookie = `glotToken=${jwt}; HttpOnly; Path=/;`;
    res.setHeader("Set-Cookie", cookie);
    return res.sendJson({ user: user, token: jwt }, HttpStatusCodes.Ok);
  } catch (err) {
    return res.sendJson({ error: err }, HttpStatusCodes.BadRequest);
  }
});

router.post("/register", async (req, res) => {
  try {
    const repo = new UsersRepository();
    const body = await req.FetchBodyJson();
    const username = body.username;
    const usersWithGivenUsername = await repo.GetUserByUsername(username);
    if (usersWithGivenUsername.length > 0) {
      return res.sendJson(
        { error: "User with given username already exists" },
        HttpStatusCodes.BadRequest
      );
    }
    const passwordHash = GetHash(body.password);
    const rights = body.rights;
    await repo.InsertUser(username, passwordHash, rights);
    return res.sendJson({}, HttpStatusCodes.Created);
  } catch (err) {
    return res.sendJson({ error: err }, HttpStatusCodes.BadRequest);
  }
});

router.post("/logout", async (req, res) => {
  const repo = new UsersRepository();
  req.Headers.cookie = req.Headers.cookie || "";
  const token = req.Headers.cookie.split("=")[1];
  const jwtService = new JwtService();
  const uniqueId = jwtService.ExtractUniqueId(token);
  if (uniqueId === null || uniqueId === undefined) {
    return res.sendJson(
      { error: "Invalid token or missing uniqueId" },
      HttpStatusCodes.BadRequest
    );
  }
  repo.DeleteFromWhitelist(uniqueId);
  return res.sendJson({ message: "Logged out" }, HttpStatusCodes.Ok);
});

function GetHash(input) {
  const hashingKey = "key";
  let result = crypto
    .createHmac("sha256", hashingKey)
    .update(input)
    .digest("base64");
  return result;
}

module.exports = router;
