import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { ServerComponent } from './server/server.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningAlertComponent } from './warningalert/warningalert.component';

import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

import { ComparepassComponent } from './comparepass/comparepass.component';
import { ComparepassDirective } from './comparepass.directive';

import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { AddRemoveContentOnButtonComponent } from './add-remove-content-on-button/add-remove-content-on-button.component';

import { DecoratorAssComponent } from './decorator-ass/decorator-ass.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';

import { HooksCycleComponent } from './hooks-cycle/hooks-cycle.component';
import { HooksCycleChildComponent } from './hooks-cycle-child/hooks-cycle-child.component';

import { AngularHooksLifeCycleComponent } from './angular-hooks-life-cycle/angular-hooks-life-cycle.component';
import { ParentHooksLifeCycleComponent } from './parent-hooks-life-cycle/parent-hooks-life-cycle.component';

import { SimpleFormComponent } from './simple-form/simple-form.component';
import { StudentRegistrationFormComponent } from './student-registration-form/student-registration-form.component';
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
    ToggleButtonComponent,
    AddRemoveContentOnButtonComponent,
    HooksCycleComponent,
    HooksCycleChildComponent,
    SimpleFormComponent,
    StudentRegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
