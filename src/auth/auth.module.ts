import JWT_MODULE from '@config/jwt';
import PASSPORT_MODULE from '@config/passport';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@provider/jwt.strategy';
import { LocalStrategy } from '@provider/local.strategy';
import { UserModule } from 'user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [
    PassportModule.register(PASSPORT_MODULE),
    JwtModule.registerAsync(JWT_MODULE),
    UserModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
