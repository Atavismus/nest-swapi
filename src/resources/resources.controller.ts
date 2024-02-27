import { Controller, Get, Query } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { Resources } from './interfaces/resources.interface';

@Controller('api')
/**
 * Get an entry by resource and id or get all entries from a resource if id parameter is omitted.
 * @param {string} resource - The type of resource to search for. Must be a valid resource type.
 * @param {integer} [id] The id of the entry to retrieve. Optional.
 * @param {integer} [page] - The page number to retrieve. Optional.
 * @return {Promise<Resource[]>} One or several entries of the queried resource.
 */
export class ResourcesController {
  constructor(private resourcesService: ResourcesService) {}
  @Get('get')
  async find(
    @Query('resource') resource: string,
    @Query('id') id?: string,
    @Query('page') page?: string,
  ): Promise<Resources[]> {
    return this.resourcesService.find(resource, id, page);
  }

  /**
   * Search for entries that match the given resource and search term.
   * @param {string} resource - The type of resource to search for. Must be a valid resource type.
   * @param {string} search - The search term to look for within the specified resource (mostly its name).
   * @param {integer} [page] - The page number to retrieve. Optional.
   * @return {Promise<Resource[]>} One or several entries of the queried resource matching the search term.
   */
  @Get('search')
  async search(
    @Query('resource') resource: string,
    @Query('search') search: string,
    @Query('page') page?: string,
  ): Promise<Resources[]> {
    return this.resourcesService.search(resource, search, page);
  }
}
