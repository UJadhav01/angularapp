import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurdOprationModuleRoutingModule } from './curd-opration-module-routing.module';
import { AddStudentinfoComponent } from './add-studentinfo/add-studentinfo.component';
import { CurdOperationComponent } from './curd-operation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CurdOperationComponent,
    AddStudentinfoComponent,
  ],
  imports: [
    CommonModule,
    CurdOprationModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CurdOprationModuleModule { }
