import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appComparepass]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ComparepassDirective,
    multi: true
    }]
})
export class ComparepassDirective {

  @Input() appComparepass: string;
  validate(control: AbstractControl):{[key:string]: any} |null {
    const controlToCompare = control.parent.get(this.appComparepass);

    if(controlToCompare && controlToCompare.value !==control.value){
    return { 'notEqual': true}
    }
    return null;
    }



  constructor() { }

}
