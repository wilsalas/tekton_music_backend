import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { Songs } from './entities/songs.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Songs])],
  providers: [SongsService],
  controllers: [SongsController],
})
export class SongsModule {}
