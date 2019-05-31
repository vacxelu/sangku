import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe1'
})
export class Safe1Pipe implements PipeTransform {

  constructor(private sanz:DomSanitizer){

  }
  transform(value: any): any {
    return this.sanz.bypassSecurityTrustResourceUrl(value);
  }

}
