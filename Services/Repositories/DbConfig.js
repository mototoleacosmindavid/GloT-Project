class DbConfig {
  get() {
    return {
      server: process.env["DB_SERVER"],
      authentication: {
        type: "default",
        options: {
          userName: process.env["DB_USERNAME"],
          password: process.env["DB_PASSWORD"],
        },
      },
      options: {
        encrypt: false,
        database: process.env["DB_DATABASE"],
      },
    };
  }
}

module.exports = DbConfig;
