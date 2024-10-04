const Router = require("../RoutingEngine/Router");
const HttpStatusCodes = require("../RoutingEngine/HttpStatusCodes");
const AttacksRepository = require("../Services/Repositories/AttacksRepository");
const jsonToCsvConverter = require("json-2-csv");
const router = new Router();
const MimeTypes = require("../RoutingEngine/MimeTypes");
const JwtService = require("../Services/JwtService");
const UsersRepository = require("../Services/Repositories/UsersRepository");

router.get("/count", async (req, res) => {
  const repo = new AttacksRepository();
  try {
    const filters = req.Query;
    const count = await repo.GetAttacksCountByFilters(filters);
    return res.sendJson({ count: count }, HttpStatusCodes.Ok);
  } catch (err) {
    return res.sendJson({ error: err }, HttpStatusCodes.BadRequest);
  }
});

router.get("/", async (req, res) => {
  const repo = new AttacksRepository();
  const filters = req.Query;
  try {
    const attacks = await repo.GetAttacksByFilters(filters);
    if (req.Query.format === "csv") {
      const jwtService = new JwtService();
      const usersRepo = new UsersRepository();
      const cookie = req.Headers.cookie;
      const extractedToken = jwtService.extractByCookieKey(cookie, "glotToken");
      const userSessionId = jwtService.ExtractUniqueId(extractedToken);
      if (!usersRepo.IsWhitelisted(userSessionId)) {
        return res.sendJson(
          { error: "You are not authorized to download this file" },
          HttpStatusCodes.Unauthorized
        );
      }
      const csvContent = jsonToCsvConverter.json2csv(attacks);
      const fileName = `attacks${GetCurrentDateTimeInShortFormat()}.csv`;

      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${fileName}; charset=utf-8`
      );
      return res.send(csvContent, HttpStatusCodes.Ok, MimeTypes.TextCsv);
    }
    return res.sendJson(
      {
        count: attacks.length,
        data: attacks,
      },
      HttpStatusCodes.Ok
    );
  } catch (err) {
    return res.sendJson({ error: err }, HttpStatusCodes.BadRequest);
  }
});

router.get("/countries", async (req, res) => {
  const repo = new AttacksRepository();
  try {
    const result = await repo.GetCountriesDistinct();
    return res.sendJson(
      {
        count: result.length,
        data: result,
      },
      HttpStatusCodes.Ok
    );
  } catch (err) {
    return res.sendJson({ error: err }, HttpStatusCodes.BadRequest);
  }
});

router.get("/attacktypes", async (req, res) => {
  const repo = new AttacksRepository();
  try {
    const result = await repo.GetAttackTypesDistinct();
    return res.sendJson(
      {
        count: result.length,
        data: result,
      },
      HttpStatusCodes.Ok
    );
  } catch (err) {
    return res.sendJson({ error: err }, HttpStatusCodes.BadRequest);
  }
});

router.get("/targettypes", async (req, res) => {
  const repo = new AttacksRepository();
  try {
    const result = await repo.GetTargetTypesDistinct();
    return res.sendJson(
      {
        count: result.length,
        data: result,
      },
      HttpStatusCodes.Ok
    );
  } catch (err) {
    return res.sendJson({ error: err }, HttpStatusCodes.BadRequest);
  }
});

router.get("/groupnames", async (req, res) => {
  const repo = new AttacksRepository();
  try {
    const result = await repo.GetTerroristGroupNamesDistinct();
    return res.sendJson(
      {
        count: result.length,
        data: result,
      },
      HttpStatusCodes.Ok
    );
  } catch (err) {
    return res.sendJson({ error: err }, HttpStatusCodes.BadRequest);
  }
});

router.get("/years", async (req, res) => {
  const repo = new AttacksRepository();
  try {
    const result = await repo.GetYearsDistinct();
    return res.sendJson(
      {
        count: result.length,
        data: result,
      },
      HttpStatusCodes.Ok
    );
  } catch (err) {
    return res.sendJson({ error: err }, HttpStatusCodes.BadRequest);
  }
});

function GetCurrentDateTimeInShortFormat() {
  const now = new Date();
  return (
    "" +
    now.getFullYear() +
    now.getMonth() +
    now.getDate() +
    now.getHours() +
    now.getMinutes()
  );
}

module.exports = router;
