import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapidapiRoutingModule } from './rapidapi-routing.module';
import { RapidApiComponent } from './rapid-api.component';
import { BbFiananceComponent } from './bb-fianance/bb-fianance.component';
import { YoutubeMusicComponent } from './youtube-music/youtube-music.component';


@NgModule({
  declarations: [
    RapidApiComponent,
    BbFiananceComponent,
    YoutubeMusicComponent,
  ],
  imports: [
    CommonModule,
    RapidapiRoutingModule,
  ]
})
export class RapidapiModule { }
