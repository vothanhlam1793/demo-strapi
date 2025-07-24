module.exports = ({ env }) => ({
  email: {
    provider: env('EMAIL_PROVIDER', 'smtp'),
    providerOptions: {
      // Cấu hình các tùy chọn cho provider email của bạn
      // Ví dụ cho SMTP:
      host: env('SMTP_HOST', 'smtp.gmail.com'),
      port: env('SMTP_PORT', 587),
      secure: true,
      // ...
      auth: {
        user: env('SMTP_USERNAME', 'cretasolu@gmail.com'),
        pass: env('SMTP_PASSWORD', 'gufjcfenuevzfpur'),
      },
    },
    settings: {
      // Cấu hình tùy chọn khác nếu cần
    },
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
  'duplicate-button': true,
  'fuzzy-search': {
    enabled: false,
    config: {
      // See `Config` section.
    },
  },
  meilisearch: {
    config: {
      // Your meili host
      host: "http://svr3.creta.vn:7700",
      // Your master key or private key
      apiKey: "masterKey",
      product: {
        settings: {
          searchableAttributes: ['name','code']
        }
      }
    }
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 15,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "apollo-sandbox": {
    // enables the plugin only in development mode
    // if you also want to use it in production, set this to true
    // keep in mind that graphql playground has to be enabled
    enabled: process.env.NODE_ENV === "production" ? false : true,
    // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
  },
  ckeditor5: {
    enabled: true
  }

});
