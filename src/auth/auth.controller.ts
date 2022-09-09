import { GetUser } from '@decorator/jwt.decorator';
import { ApiOperationDescription } from '@enum/api-operation-description.enum';
import { LocalAuthGuard } from '@guard/local-auth.guard';
import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from 'user/entities/user.entity';
import { AuthService } from './auth.service';
import AuthDto from './dto/auth-dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: AuthDto })
  @ApiOperation({ description: ApiOperationDescription.AUTH })
  @ApiOkResponse({ type: AuthDto })
  @Post('/login')
  login(@GetUser() user: User) {
    return this.authService.login(user);
  }
}
