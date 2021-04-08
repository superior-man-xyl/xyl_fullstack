'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // restful 概念暴露资源
  // router.post('/users', controller.users.create)
  router.resources('users','/users',  controller.users);
};
