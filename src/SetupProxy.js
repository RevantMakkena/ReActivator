const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/employees", {
      target: "http://jsondata.us-west-1.elasticbeanstalk.com/api",
      changeOrigin: true,
    })
  );
};
