import { Injectable } from '@nestjs/common';
import { Resources } from './interfaces/resources.interface';
import axios from 'axios';

@Injectable()
export class ResourcesService {
  async findAll(resource: string, page: string): Promise<Resources[]> {
    page = page !== '' ? `?page=${page}` : '';
    console.log(page);
    try {
      const response = await axios.get(
        `${process.env.API_URL}${resource}/${page}`,
      );
      return response.data;
    } catch (error) {
      error.message = `Bad request: ${error.message}`;
      throw error;
    }
  }

  async findOne(resource: string, id: string): Promise<Resources[]> {
    try {
      const response = await axios.get(
        `${process.env.API_URL}${resource}/${id}`,
      );
      return response.data;
    } catch (error) {
      error.message = `Bad request: ${error.message}`;
      throw error;
    }
  }
}
