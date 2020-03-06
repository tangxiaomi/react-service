// 前台接口的路径配置
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index); // 访问的路径 controller.文件名.方法名
}