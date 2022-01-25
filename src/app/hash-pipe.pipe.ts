import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';
@Pipe({
  name: 'hashPipe',
})
export class HashPipePipe implements PipeTransform {
  transform(value: string): unknown {
    const md5 = new Md5();

    if (value != '') {
      md5.appendStr(value);
      let code = md5.end();
      console.log(code);
      return code;
    } else {
      return '';
    }
  }
}
