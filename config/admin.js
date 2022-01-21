module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2ed2deec829267cde5740e261a76e885'),
  },
});
