"use strict";
const { Connection, Request, TYPES } = require("tedious");
const DbConfig = require("./DbConfig");

class BaseRepository {
  GetValueArrayForSqlQuery(sqlQuery) {
    return new Promise((resolve, reject) => {
      const resultArray = [];
      const config = new DbConfig().get();
      const connection = new Connection(config);
      const request = new Request(sqlQuery, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(resultArray);
          connection.close();
        }
      });
      request.on("row", (columns) => {
        const column = columns[0];
        resultArray.push(column.value);
      });
      connection.on("connect", (err) => {
        if (err) {
          reject(err);
        } else {
          connection.execSql(request);
        }
      });
      connection.connect();
    });
  }

  GetRowsForSqlQuery(sqlQuery) {
    return new Promise((resolve, reject) => {
      const resultArray = [];
      const config = new DbConfig().get();
      const connection = new Connection(config);
      const request = new Request(sqlQuery, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(resultArray);
          connection.close();
        }
      });
      request.on("row", (columns) => {
        const result = {};
        for (const column of columns) {
          const columnName = column.metadata.colName;
          const columnValue = column.value;
          result[columnName] = columnValue;
        }
        resultArray.push(result);
      });
      connection.on("connect", (err) => {
        if (err) {
          reject(err);
        } else {
          connection.execSql(request);
        }
      });
      connection.connect();
    });
  }

  GetValueForSqlQuery(sqlQuery) {
    return new Promise((resolve, reject) => {
      const config = new DbConfig().get();
      const connection = new Connection(config);
      const request = new Request(sqlQuery, (err) => {
        if (err) {
          reject(err);
        } else {
          connection.close();
        }
      });
      request.on("row", (columns) => {
        const column = columns[0];
        resolve(column.value);
      });
      connection.on("connect", (err) => {
        if (err) {
          reject(err);
        } else {
          connection.execSql(request);
        }
      });
      connection.connect();
    });
  }
}

module.exports = BaseRepository;
