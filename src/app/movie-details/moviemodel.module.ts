import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { MovieRoutingRoutingModule } from './movie-routing-routing.module';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    HomeComponent,
    MovieComponent,],
  imports: [
    CommonModule,
    MovieRoutingRoutingModule
  ],

})
export class MoviemodelModule { }
