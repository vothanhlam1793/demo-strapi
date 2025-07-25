module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "frame-src": [ "http://localhost:*", "self", "sandbox.embed.apollographql.com", "studio.apollographql.com" ],
          "script-src": [ "'self'", "'unsafe-eval'" ] // Add 'unsafe-eval' as an allowed source
        },
      },
    },
  },
  "strapi::cors",
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
