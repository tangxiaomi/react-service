'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// 这是入口的路由，所有路由都走这里
module.exports = app => {
  require('./router/default')(app);
};
