import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningAlertComponent } from './warningalert/warningalert.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ComparepassComponent } from './comparepass/comparepass.component';
import { ComparepassDirective } from './comparepass.directive';
import { DecoratorAssComponent } from './decorator-ass/decorator-ass.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { AngularHooksLifeCycleComponent } from './angular-hooks-life-cycle/angular-hooks-life-cycle.component';
import { ParentHooksLifeCycleComponent } from './parent-hooks-life-cycle/parent-hooks-life-cycle.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessalertComponent,
    WarningAlertComponent,
    HeaderComponent,
    DirectivedemoComponent,
    NgswitchComponent,
    StructureDirectiveComponent,
    AttributeDirectiveComponent,
    ComparepassComponent,
    ComparepassDirective,
    DecoratorAssComponent,
    OutputDecoratorComponent,
    AngularHooksLifeCycleComponent,
    ParentHooksLifeCycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
