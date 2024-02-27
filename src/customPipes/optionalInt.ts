import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class OptionalIntPipe
  implements PipeTransform<string | undefined, number | null>
{
  transform(value: string | undefined): number | null {
    if (value === undefined || value === null || value === '') {
      return null;
    }
    const parsedValue = parseInt(value, 10);
    if (isNaN(parsedValue)) {
      throw new Error('Invalid numeric string');
    }
    return parsedValue;
  }
}
