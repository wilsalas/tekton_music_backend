import ENVIRONMENT from '@enum/environment.enum';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

const TYPEORM_MODULE: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    name: 'default',
    type: 'postgres',
    host: configService.get<string>(ENVIRONMENT.DB_HOST),
    port: configService.get<number>(ENVIRONMENT.DB_PORT),
    username: configService.get<string>(ENVIRONMENT.DB_USER),
    password: configService.get<string>(ENVIRONMENT.DB_PASSWORD),
    database: configService.get<string>(ENVIRONMENT.DB_NAME),
    autoLoadEntities: true,
    synchronize: true,
  }),
};

export default TYPEORM_MODULE;
