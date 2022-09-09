import { ApiOperationDescription } from '@enum/api-operation-description.enum';
import { JwtAuthGuard } from '@guard/jwt-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @ApiOperation({ description: ApiOperationDescription.CATEGORIES })
  @Get('/')
  findAll() {
    return this.categoryService.findAll();
  }
}
