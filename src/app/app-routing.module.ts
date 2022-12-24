import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRemoveContentOnButtonComponent } from './add-remove-content-on-button/add-remove-content-on-button.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { AuthComponent } from './auth/auth.component';
import { ComparepassComponent } from './comparepass/comparepass.component';
import { CssNotesComponent } from './css-notes/css-notes.component';
import { DirectiveAssignmentComponent } from './directive-assignment/directive-assignment.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { FilterPipeAssComponent } from './filter-pipe-ass/filter-pipe-ass.component';
import { FilterPipeDemoComponent } from './filter-pipe-demo/filter-pipe-demo.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HtmlNotesComponent } from './html-notes/html-notes.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { ParentHooksLifeCycleComponent } from './parent-hooks-life-cycle/parent-hooks-life-cycle.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Reactive1stassignmentComponent } from './reactive1stassignment/reactive1stassignment.component';
import { Reactive2ndAssignmentComponent } from './reactive2nd-assignment/reactive2nd-assignment.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { ServiceDemo2Component } from './service-demo2/service-demo2.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { StudentRegistrationFormComponent } from './student-registration-form/student-registration-form.component';
import { SubjectDemo1Component } from './subject-demo1/subject-demo1.component';
import { Tdf3rdassignmentComponent } from './tdf3rdassignment/tdf3rdassignment.component';
import { Tdf4thassignmentComponent } from './tdf4thassignment/tdf4thassignment.component';
import { Tdf5thassignmentComponent } from './tdf5thassignment/tdf5thassignment.component';
import { TdfsecondassComponent } from './tdfsecondass/tdfsecondass.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { TypescriptNotesComponent } from './typescript-notes/typescript-notes.component';


const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'htmlnotes', component: HtmlNotesComponent},
  {path: 'cssnotes', component: CssNotesComponent},
  {path: 'typescriptnotes', component: TypescriptNotesComponent},
  {path: 'angularnotes', component: AngularNotesComponent},

  {path: 'dir-demo', component: DirectivedemoComponent},
  {path: 'dir-ng-switch', component: NgswitchComponent},
  {path: 'dir-1st-ass', component: DirectiveAssignmentComponent},
  {path: 'dir-2nd-ass', component: ToggleButtonComponent},
  {path: 'db-3rd-ass', component: AddRemoveContentOnButtonComponent},
  {path: 'db-4th-ass', component: ComparepassComponent},

  {path:'decorators',component:OutputDecoratorComponent},

  {path:'hooks-cycle',component:ParentHooksLifeCycleComponent},

  {path: 'tdf-form', component: SimpleFormComponent},
  {path: 'tdf-stud-ass', component: StudentRegistrationFormComponent},
  {path: 'tdf-2nd-ass', component: TdfsecondassComponent},
  {path: 'tdf-3rd-ass', component: Tdf3rdassignmentComponent},
  {path: 'tdf-4th-ass', component: Tdf4thassignmentComponent},
  {path: 'tdf-5th-ass', component: Tdf5thassignmentComponent},

  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: 'reactive-1st-ass', component: Reactive1stassignmentComponent},
  {path:'reactive-2nd-ass',component:Reactive2ndAssignmentComponent},

  {path:'demo-service-1',component:ServiceDemoComponent},
  {path:'demo-service-2',component:ServiceDemo2Component},

  {path:'subject-demo',component:SubjectDemo1Component},

  {path:'pipe-demo',component:PipeDemoComponent},
  {path:'filter-pipe-demo',component:FilterPipeDemoComponent},
  {path:'filter-pipe-1st-ass',component:FilterPipeAssComponent},

  {path:'auth',component:AuthComponent},
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
