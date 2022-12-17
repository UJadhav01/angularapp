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
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import {DirectiveAssignmentComponent} from './directive-assignment/directive-assignment.component';

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
import { TdfsecondassComponent } from './tdfsecondass/tdfsecondass.component';
import { Tdf3rdassignmentComponent } from './tdf3rdassignment/tdf3rdassignment.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Tdf4thassignmentComponent } from './tdf4thassignment/tdf4thassignment.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { Tdf5thassignmentComponent } from './tdf5thassignment/tdf5thassignment.component';
import { Reactive1stassignmentComponent } from './reactive1stassignment/reactive1stassignment.component';
import { HtmlNotesComponent } from './html-notes/html-notes.component';
import { CssNotesComponent } from './css-notes/css-notes.component';
import { TypescriptNotesComponent } from './typescript-notes/typescript-notes.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessalertComponent,
    WarningAlertComponent,
    HeaderComponent,
    DirectivedemoComponent,
    NgswitchComponent,
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
    TdfsecondassComponent,
    Tdf3rdassignmentComponent,
    ReactiveFormComponent,
    Tdf4thassignmentComponent,
    HomeComponentComponent,
    DirectiveAssignmentComponent,
    Tdf5thassignmentComponent,
    Reactive1stassignmentComponent,
    HtmlNotesComponent,
    CssNotesComponent,
    TypescriptNotesComponent,
    AngularNotesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
