module.exports = ({ env }) => ({
  url: env("DATABASE_URL"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("JWT_SECRET"),
    },
  },
  host: env("HOST") || "0.0.0.0",
});
