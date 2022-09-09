import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import SongsParamsDto from './dto/songs-params-dto';
import { Songs } from './entities/songs.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Songs) private readonly songRepository: Repository<Songs>,
  ) {}

  async getSongs(): Promise<Songs[]> {
    return await this.songRepository.find({
      select: ['id', 'title', 'image', 'song'],
    });
  }

  async getSongsByFilter({
    search,
    categories,
    surpriseMe,
  }: SongsParamsDto): Promise<Songs[]> {
    const query = this.songRepository
      .createQueryBuilder('songs')
      .select('songs.id', 'id')
      .addSelect('songs.title', 'title')
      .addSelect('songs.image', 'image')
      .addSelect('songs.song', 'song')
      .innerJoin('songs.category', 'category');
    if (search) {
      query.andWhere('songs.title ILIKE :search', {
        search: `%${search}%`,
      });
    }
    if (categories?.length) {
      query.andWhere('category.id IN(:...categories)', {
        categories: categories.split(','),
      });
    }
    const songs = await query.getRawMany();
    if (surpriseMe) {
      const randomSong = songs[Math.floor(Math.random() * songs.length)];
      return [randomSong];
    }
    return songs;
  }
}
