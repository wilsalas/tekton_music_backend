require('dotenv').config();

const env = process.env;

module.exports = {
  name: 'default',
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  entities: [env.TYPEORM_ENTITIES],
};
