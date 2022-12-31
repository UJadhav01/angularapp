import { Component, OnInit } from '@angular/core';
import { YtMusicService } from 'src/app/all-services/yt-music.service';

@Component({
  selector: 'app-youtube-music',
  templateUrl: './youtube-music.component.html',
  styleUrls: ['./youtube-music.component.css']
})
export class YoutubeMusicComponent implements OnInit {

  constructor(private _ytmusic:YtMusicService) { }

  ytArray:any=[];
  ngOnInit() {
    this._ytmusic.getYoutubeMusicAPI().subscribe(music=>{
      console.log(music);
this.ytArray=music;

    })
  }

}
