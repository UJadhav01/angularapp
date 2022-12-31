import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BbFiananceComponent } from './bb-fianance/bb-fianance.component';
import { RapidApiComponent } from './rapid-api.component';
import { YoutubeMusicComponent } from './youtube-music/youtube-music.component';


const routes: Routes = [
  {path:'',component:RapidApiComponent,

children:[
{path:'bb-finance',component:BbFiananceComponent},
{path:'yt-music',component:YoutubeMusicComponent},
]

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapidapiRoutingModule { }
