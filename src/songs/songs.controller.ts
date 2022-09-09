import { ApiOperationDescription } from '@enum/api-operation-description.enum';
import { JwtAuthGuard } from '@guard/jwt-auth.guard';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import SongsParamsDto from './dto/songs-params-dto';
import { SongsService } from './songs.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('songs')
@Controller('songs')
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @ApiOperation({ description: ApiOperationDescription.SONGS })
  @Get('/')
  findAll() {
    return this.songService.getSongs();
  }

  @ApiOperation({ description: ApiOperationDescription.SONGS_BY_FILTERS })
  @Get('/songs-by-filter')
  getSongsByFilter(@Query() params: SongsParamsDto) {
    return this.songService.getSongsByFilter(params);
  }
}
