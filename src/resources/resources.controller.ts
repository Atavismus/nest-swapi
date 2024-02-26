import { Controller, Get, Query } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { Resources } from './interfaces/resources.interface';

@Controller('resources')
export class ResourcesController {
  constructor(private resourcesService: ResourcesService) {}
  @Get()
  async findAll(
    @Query('resource') resource: string,
    @Query('page') page: string,
  ): Promise<Resources[]> {
    return this.resourcesService.findAll(resource, page);
  }
  @Get()
  async findOne(
    @Query('resource') resource: string,
    @Query('id') id: string,
  ): Promise<Resources[]> {
    return this.resourcesService.findOne(resource, id);
  }
}
