module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8afe24448486d7517064e2e8df96aaf5'),
  },
});
