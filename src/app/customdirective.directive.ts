import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',

})
export class CustomDirectiveDirective {

  constructor(private el:ElementRef<HTMLElement>,private renderer:Renderer2) {
 console.log(`custom directive call`);
 el.nativeElement.style.margin='30px 30px';
 el.nativeElement.style.border='2px solid blue';
 el.nativeElement.style.padding='10px';
 el.nativeElement.style.color='#d122a3';
 renderer.setStyle(el.nativeElement,'background','#dddd');//when want to run application other than browser always use renderer

}
}

