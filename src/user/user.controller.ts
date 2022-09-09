import { ApiOperationDescription } from '@enum/api-operation-description.enum';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import CreateUserDto from './dto/create-user-dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ description: ApiOperationDescription.REGISTER })
  @ApiOkResponse({ type: String })
  @Post('/create')
  create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }
}
