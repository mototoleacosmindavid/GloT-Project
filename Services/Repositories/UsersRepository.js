"use strict";
const BaseRepository = require("./BaseRepository");

class UsersRepository {
  async GetUserByCredentials(username, passwordHash) {
    const query = `SELECT [Username], [Rights] FROM [dbo].[Users] WHERE [Username] = '${username}' AND [PasswordHash] = '${passwordHash}'`;
    const baseRepo = new BaseRepository();
    const result = await baseRepo.GetRowsForSqlQuery(query);
    return result;
  }

  async InsertUser(username, passwordHash, rights) {
    const query =
      "INSERT INTO [dbo].[Users] ([Username], [PasswordHash], [Rights]) VALUES " +
      ` ('${username}', '${passwordHash}', '${rights}'); SELECT 1;`;
    const baseRepo = new BaseRepository();
    const result = await baseRepo.GetRowsForSqlQuery(query);
    return result;
  }

  async GetUserByUsername(username) {
    const query = `SELECT [Username] FROM [dbo].[Users] WHERE [Username] = '${username}'`;
    const baseRepo = new BaseRepository();
    const result = await baseRepo.GetRowsForSqlQuery(query);
    return result;
  }
  static #whitelist = [];
  
  WhitelistUniqueId(uniqueId) {
    UsersRepository.#whitelist.push(uniqueId);
  }
  IsWhitelisted(uniqueId) {
    return UsersRepository.#whitelist.includes(uniqueId);
  }
  DeleteFromWhitelist(uniqueId) {
    UsersRepository.#whitelist = UsersRepository.#whitelist.filter((x) => x !== uniqueId);
  }
}

module.exports = UsersRepository;
