import { Controller, Get, Query } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { Resources } from './interfaces/resources.interface';

@Controller('api/get')
/**
 * Get an entry by resource and id or get all entries from a resource if no id parameter
 * @param {string} resource
 * @param {integer} id (optional)
 * @param {integer} page (optional)
 */
export class ResourcesController {
  constructor(private resourcesService: ResourcesService) {}
  @Get()
  async find(
    @Query('resource') resource: string,
    @Query('id') id?: string,
    @Query('page') page?: string,
  ): Promise<Resources[]> {
    return this.resourcesService.find(resource, id, page);
  }
}
