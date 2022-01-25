module.exports = ({ env }) => ({
  url: env("DATABASE_URL"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("JWT_SECRET"),
    },
  },
});
