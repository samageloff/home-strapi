const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      database: config.database,
      user: config.user,
      password: config.password,
      port: config.port,
      host: config.host,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

/postgres:
//ydszpforfgslxo:
cb86c909d2529d9ed87d0bb18750197ac4fb30a23dacb696cf46e92089605737@ec2-44-199-52-133.compute-1.amazonaws.com:5432/d89ad1v1d46r1r/admin/:path