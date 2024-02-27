import { Injectable } from '@nestjs/common';
import { Resources } from './interfaces/resources.interface';
import axios from 'axios';

@Injectable()
export class ResourcesService {
  async find(
    resource: string,
    id?: string,
    page?: string,
  ): Promise<Resources[]> {
    id = id ?? '';
    page = page ? `?page=${page}` : '';
    try {
      const response = await axios.get(
        `${process.env.API_URL}${resource}/${page}${id}`,
      );
      return response.data;
    } catch (error) {
      error.message = `Bad request - /api/get failed: ${error.message}`;
      throw error;
    }
  }

  async search(
    resource: string,
    search: string,
    page?: string,
  ): Promise<Resources[]> {
    page = page ? `&page=${page}` : '';
    try {
      const result = await axios.get(
        `${process.env.API_URL}${resource}/?search=${search}${page}`,
      );
      return result.data;
    } catch (error) {
      error.message = `Bad request - /api/search failed: ${error.message}`;
      throw error;
    }
  }
}
