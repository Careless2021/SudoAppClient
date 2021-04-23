const createProxyMiddleware = require("http-proxy-middleware");

// module.exports = app => {
//   //..
//   app.use(
//     "/api/*",
//     createProxyMiddleware({
//       target: "http://localhost:5000",
//       changeOrigin: true
//     })
//   );
//   // ...
//   app.use(
//     "/auth/google",
//     createProxyMiddleware({
//       target: "http://localhost:5000",
//       changeOrigin: true
//     })
//   );
// };

module.exports = app => {
  //..
  app.use(
    "/api/*",
    createProxyMiddleware({
      target: "https://revalued.herokuapp.com/",
      changeOrigin: true
    })
  );
  // ...
  app.use(
    "/auth/google",
    createProxyMiddleware({
      target: "https://revalued.herokuapp.com/",
      changeOrigin: true
    })
  );
};