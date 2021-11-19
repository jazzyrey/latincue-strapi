module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a02e1e3efced9ca891ec787ffc3c2f9a'),
    },
  },
});
