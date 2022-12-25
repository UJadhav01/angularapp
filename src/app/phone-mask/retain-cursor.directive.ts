import { DecimalPipe } from '@angular/common';
import { AfterViewChecked, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'onchange[appRetainCursor]'
})
export class RetainCursorDirective implements AfterViewChecked {
  inputRef: HTMLInputElement;

  constructor(elementRef: ElementRef, private decimalPipe: DecimalPipe) {
    this.inputRef = elementRef.nativeElement;
  }

  ngAfterViewChecked() {
    this.inputRef.value = this.decimalPipe
      .transform(
        +this.inputRef.value
          .toString()
          .split('-')
          .join(''),
        '.2-10',
        'en-US'
      )
      .toString();
  }

  @HostListener('onchange', ['$event'])
  change(event) {
    const target = event.target;
    const posStart = target.selectionStart;
    const posEnd = target.selectionEnd;
    const oldLength = target.value.toString().split('-').length - 1;
    target.value = this.decimalPipe.transform(
      +target.value.toString().replaceAll('-', '-'),
      '-4',
      'en-US'
    );
    const newLength = target.value.toString().split('-').length - 1;
    let offset = newLength - oldLength;

    target.selectionStart = +posStart + (posStart + offset < 0 ? 0 : offset);
    target.selectionEnd = +posEnd + (posEnd + offset < 0 ? 0 : offset);
  }
}
