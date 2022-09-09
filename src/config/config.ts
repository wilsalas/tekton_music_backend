import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';

const CONFIG_MODULE: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: ['.env', '.env.test', '.env.development', '.env.production'],
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),
    PORT: Joi.number().default(3001),
    SERVER: Joi.string().ip({
      version: ['ipv4', 'ipv6'],
    }),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),
    API_JWT_SECRET_KEY: Joi.string().required(),
  }),
};

export default CONFIG_MODULE;
