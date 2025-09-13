module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{html,js,css,png,svg,ico,json}"],
  swDest: "dist/sw.js",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/solar-system-api\.vercel\.app\//, // troca pela tua API real
      handler: "NetworkFirst",
      options: {
        cacheName: "api-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 60 * 60, // 1 hora
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 dias
        },
      },
    },
  ],
};