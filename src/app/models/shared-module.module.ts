import { NgModule } from '@angular/core';
import { CustomDirectiveDirective } from '../customdirective.directive';



@NgModule({
  declarations: [
    CustomDirectiveDirective
  ],
  imports: [

  ],
  exports:[CustomDirectiveDirective],
})
export class SharedModuleModule { }
