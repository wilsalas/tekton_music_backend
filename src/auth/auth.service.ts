import { MessageHandler } from '@enum/message-handler.enum';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TAuthResponse } from '@type/authResponse';
import { compare } from 'bcryptjs';
import { User } from 'user/entities/user.entity';
import { UserService } from 'user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(MessageHandler.USER_NOT_FOUND);
    }
    const comparePassword = await compare(password, user.password);
    if (!comparePassword) {
      throw new UnauthorizedException(MessageHandler.CREDENTIALS_INCORRECT);
    }
    delete user.password;
    return user;
  }

  login(user: User): TAuthResponse {
    const { id, username, email } = user;
    return {
      username,
      email,
      token: this.jwtService.sign({ id }),
    };
  }
}
