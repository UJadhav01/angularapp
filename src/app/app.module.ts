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
