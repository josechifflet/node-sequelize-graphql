import { Dialect, Sequelize } from 'sequelize';
import config from '../../config/config';

const sequelize = new Sequelize(
  config.DB_DATABASE,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: config.DB_CONNECTOR as Dialect,
    logging: true
  }
);

if (process.env.NODE_ENV !== 'test') {
  sequelize.sync();
}

export default sequelize;
