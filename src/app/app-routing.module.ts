import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRemoveContentOnButtonComponent } from './add-remove-content-on-button/add-remove-content-on-button.component';
import { ComparepassComponent } from './comparepass/comparepass.component';
import { DirectiveAssignmentComponent } from './directive-assignment/directive-assignment.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { StudentRegistrationFormComponent } from './student-registration-form/student-registration-form.component';
import { Tdf3rdassignmentComponent } from './tdf3rdassignment/tdf3rdassignment.component';
import { Tdf4thassignmentComponent } from './tdf4thassignment/tdf4thassignment.component';
import { TdfsecondassComponent } from './tdfsecondass/tdfsecondass.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';


const routes: Routes = [
  {path: 'htmlnotes', component: NgswitchComponent},
  {path: 'cssnotes', component: NgswitchComponent},
  {path: 'typescriptnotes', component: NgswitchComponent},
  {path: 'angularnotes', component: NgswitchComponent},

  {path: 'dir-demo', component: DirectivedemoComponent},
  {path: 'dir-ng-switch', component: NgswitchComponent},
  {path: 'dir-1st-ass', component: DirectiveAssignmentComponent},
  {path: 'dir-2nd-ass', component: ToggleButtonComponent},
  {path: 'db-3rd-ass', component: AddRemoveContentOnButtonComponent},
  {path: 'db-4th-ass', component: ComparepassComponent},

  {path: 'tdf-form', component: SimpleFormComponent},
  {path: 'tdf-stud-ass', component: StudentRegistrationFormComponent},
  {path: 'tdf-2nd-ass', component: TdfsecondassComponent},
  {path: 'tdf-3rd-ass', component: Tdf3rdassignmentComponent},
  {path: 'tdf-4th-ass', component: Tdf4thassignmentComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},



  {path: 'home', component: HomeComponentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
