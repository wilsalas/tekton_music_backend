import ENVIRONMENT from '@enum/environment.enum';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

const JWT_MODULE: JwtModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    secret: configService.get<string>(ENVIRONMENT.API_JWT_SECRET_KEY),
    signOptions: {
      expiresIn: configService.get<string>(ENVIRONMENT.EXPIRES_IN),
    },
  }),
};

export default JWT_MODULE;
