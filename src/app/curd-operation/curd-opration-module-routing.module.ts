import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentinfoComponent } from './add-studentinfo/add-studentinfo.component';
import { CurdOperationComponent } from './curd-operation.component';


const routes: Routes = [
  {path:'',component:CurdOperationComponent,
  children:
  [
    {path:'add-student/id',component:AddStudentinfoComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurdOprationModuleRoutingModule { }
