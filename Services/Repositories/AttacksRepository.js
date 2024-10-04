"use strict";
const BaseRepository = require("./BaseRepository");

class AttacksRepository {
  async GetNumberOfAttacks() {
    const query = "SELECT COUNT(*) FROM [dbo].[Attacks]";
    const baseRepo = new BaseRepository();
    const result = await baseRepo.GetValueForSqlQuery(query);
    return result;
  }
  async GetAttackTypesDistinct() {
    const query = "SELECT DISTINCT [attacktype1_txt] FROM [dbo].[Attacks]";
    const baseRepo = new BaseRepository();
    const result = await baseRepo.GetValueArrayForSqlQuery(query);
    return result;
  }
  async GetTargetTypesDistinct() {
    const query = "SELECT DISTINCT [targtype1_txt] FROM [dbo].[Attacks]";
    const baseRepo = new BaseRepository();
    const result = await baseRepo.GetValueArrayForSqlQuery(query);
    return result;
  }
  async GetTerroristGroupNamesDistinct() {
    const query = "SELECT DISTINCT [gname] FROM [dbo].[Attacks]";
    const baseRepo = new BaseRepository();
    const result = await baseRepo.GetValueArrayForSqlQuery(query);
    return result;
  }
  async GetCountriesDistinct() {
    const query = "SELECT DISTINCT [country_txt] FROM [dbo].[Attacks]";
    const baseRepo = new BaseRepository();
    const result = await baseRepo.GetValueArrayForSqlQuery(query);
    return result;
  }
  async GetAttacksByFilters(filters) {
    filters.orderBy = this.#IfEmptySetDefault(filters.orderBy, "eventid");
    const indexStart = this.#IfEmptySetDefault(filters.indexStart, "1");
    const indexEnd = this.#IfEmptySetDefault(filters.indexEnd, "100000");
    const offset = indexStart - 1;
    const fetchFirst = indexEnd - indexStart + 1;

    const baseQuery = `SELECT [eventid], [country_txt], [region_txt], 
    [success], [suicide], [attacktype1_txt],
    [targtype1_txt], [gname], [nkill],
    [nwound], [iyear], [imonth], [iday]
    FROM [Glot].[dbo].[Attacks]`;

    const conditionalClauses = GetAttacksConditionsByFilters(filters);
    const condition = conditionalClauses.length > 0
      ? ` WHERE ${conditionalClauses.join(" AND ")}`
      : "";

    const query =
      baseQuery + condition +
      ` ORDER BY ${filters.orderBy}` +
      ` OFFSET ${offset} ROWS` +
      ` FETCH FIRST ${fetchFirst} ROWS ONLY`;

    const baseRepo = new BaseRepository();
    return await baseRepo.GetRowsForSqlQuery(query);
  }
  async GetAttacksCountByFilters(filters) {
    const baseQuery = "SELECT COUNT(*) FROM [dbo].[Attacks]";
    const conditionalClauses = GetAttacksConditionsByFilters(filters);
    const condition = conditionalClauses.length > 0
      ? ` WHERE ${conditionalClauses.join(" AND ")}`
      : "";
    const query = baseQuery + condition;
    const baseRepo = new BaseRepository();
    return await baseRepo.GetValueForSqlQuery(query);
  }
  async GetYearsDistinct() {
    const query = "SELECT DISTINCT [iyear] FROM [dbo].[Attacks]";
    const baseRepo = new BaseRepository();
    const result = await baseRepo.GetValueArrayForSqlQuery(query);
    return result;
  }
  #IfEmptySetDefault(field, defaultValue) {
    if (field === null || field === undefined) {
      return defaultValue;
    }
    return field;
  }
}

function GetAttacksConditionsByFilters(filters) {
  const conditionalClauses = [];
  if (filters.year) {
    conditionalClauses.push(`[iyear] = ${filters.year}`);
  }
  if (filters.country) {
    conditionalClauses.push(`[country_txt] = '${filters.country}'`);
  }
  if (filters.attackType) {
    conditionalClauses.push(`[attacktype1_txt] = '${filters.attackType}'`);
  }
  if (filters.targetType) {
    conditionalClauses.push(`[targtype1_txt] = '${filters.targetType}'`);
  }
  if (filters.groupName) {
    conditionalClauses.push(`[gname] = '${filters.groupName}'`);
  }
  if (filters.success) {
    conditionalClauses.push(`[success] = ${filters.success}`);
  }
  if (filters.suicide) {
    conditionalClauses.push(`[suicide] = ${filters.suicide}`);
  }
  if (filters.minVictims) {
    conditionalClauses.push(`[nkill] >= ${filters.minVictims}`);
  }
  if (filters.maxVictims) {
    conditionalClauses.push(`[nkill] <= ${filters.maxVictims}`);
  }
  if (filters.minWounded) {
    conditionalClauses.push(`[nwound] >= ${filters.minWounded}`);
  }
  if (filters.maxWounded) {
    conditionalClauses.push(`[nwound] <= ${filters.maxWounded}`);
  }
  return conditionalClauses;
}
module.exports = AttacksRepository;
