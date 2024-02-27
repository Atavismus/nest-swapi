import { Injectable } from '@nestjs/common';
import { Resources } from './interfaces/resources.interface';
import axios from 'axios';

@Injectable()
export class ResourcesService {
  async find(
    resource: string,
    id?: number,
    page?: number,
  ): Promise<Resources[]> {
    const idParam: string = id ? id.toString() : '';
    const pageParam: string = page ? `?page=${page}` : '';
    try {
      const response = await axios.get(
        `${process.env.API_URL}${resource}/${pageParam}${idParam}`,
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
    page?: number,
  ): Promise<Resources[]> {
    const pageParam: string = page ? `&page=${page}` : '';
    try {
      const result = await axios.get(
        `${process.env.API_URL}${resource}/?search=${search}${pageParam}`,
      );
      return result.data;
    } catch (error) {
      error.message = `Bad request - /api/search failed: ${error.message}`;
      throw error;
    }
  }
}
