const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://NewRich-JobTask-ALB-159873671.us-east-1.elb.amazonaws.com",
      pathRewrite: { "^/api": "" }
    })
  );
};
