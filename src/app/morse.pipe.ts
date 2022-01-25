import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'morse',
})
export class MorsePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {

    let morsecode: string = '';
    switch (value) {
      case 'a':
        morsecode = '.-';
        break;
      case 'b':
        morsecode = '-...';
        break;
      case 'c':
        morsecode = '-.-.';
        break;

      default:
        break;
    }


    return morsecode;
  }
}
