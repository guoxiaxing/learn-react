// 文件名固定 React 内部会来找这个文件
// 每次修改代理文件 都需要重启服务
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api1", {
      target: "http://localhost:5000",
      changeOrigin: true, // 控制服务器收到的请求头中 Host 字段的值 加上会将客户端的Host的域名改为和服务器保持一致 默认为false 也就是客户端的域名
      pathRewrite: {
        "^/api1": ""
      }
    }),
    proxy("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: {
        "^/api2": ""
      }
    })
  );
};
