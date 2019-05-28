import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncateNews' })
export class TruncateNewsPipe implements PipeTransform {
  transform(value: string, numberOfChar: number = 150) {
    return value.substr(0, numberOfChar) + '...';
  }
}
