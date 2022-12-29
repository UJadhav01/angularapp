import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieComponent } from './movie/movie.component';


const routes:Routes=[
  {path:'',component:MovieDetailsComponent,
  children:[
  {path:'movie-home',component:HomeComponent},
  {path:'movie-comp',component:MovieComponent},

]
},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingRoutingModule { }
