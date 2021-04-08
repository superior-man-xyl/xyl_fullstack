'use strict';
//一切服务都是插件 koa 好用，而且简单， 但满足不了大型项目多人开发
//有一个大家都公认的约定
/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize:{
    enable:true,
    package:'egg-sequelize'
  }
};
