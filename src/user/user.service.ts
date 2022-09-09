import { MessageHandler } from '@enum/message-handler.enum';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TResponse } from '@type/response';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/create-user-dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(userDto: CreateUserDto): Promise<TResponse> {
    const user = await this.userRepository.findOne({
      where: { email: userDto.email },
    });
    if (user) {
      throw new UnauthorizedException(MessageHandler.EMAIL_ALREADY_TAKEN);
    }
    const newUser = this.userRepository.create(userDto);
    await this.userRepository.save(newUser);
    return { message: MessageHandler.USER_CREATED };
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(MessageHandler.USER_NOT_FOUND);
    return user;
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({
      where: {
        email,
      },
    });
  }
}
