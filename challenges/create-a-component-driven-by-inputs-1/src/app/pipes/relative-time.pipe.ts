import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime',
  standalone: true
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60)
    const minutes = value - hours * 60

    const hoursLabel = hours ? `${hours}h` : ''
    const minutessLabel = minutes ? `${minutes}min` : ''
    
    return `${hoursLabel} ${minutessLabel}`
  }

}
