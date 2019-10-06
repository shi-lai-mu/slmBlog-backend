import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import mysql from './config.mysql'

export default (appInfo: EggAppInfo) => {
  const config = {
    // 数据库
    mysql: {
      client: {
        // host
        host: 'rm-bp11sat0d607f9qe2ro.mysql.rds.aliyuncs.com',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'Allselect666',
        // 数据库名
        database: `${process.env.NODE_ENV === 'development' ? 'test_' : ''}bbs`,
      },
    },

    // CORS 跨域解决
    security: {
      csrf: {
        enable: false,
        ignoreJSON: true,
      },
      domainWhiteList: [ '*' ],
    },

    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true,
    },

  } as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570349918127_5202';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
