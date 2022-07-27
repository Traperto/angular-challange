import { Pipe, PipeTransform } from '@angular/core';
import { Priority } from '../../models/todo';

@Pipe({
  name: 'priority',
  pure: true
})
export class PriorityPipe implements PipeTransform {

  transform(value: number): string {
    return Priority[value];
  }

}
