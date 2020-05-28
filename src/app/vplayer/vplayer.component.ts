import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service'
import { Video } from '../video.model'
import { VgAPI } from 'videogular2/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './vplayer.component.html',
  styleUrls : ['../../../node_modules/videogular2/fonts/videogular.css','./vplayer.component.css']

})
// const media = null;
export class  VplayerComponent implements OnInit{
  clips : Video [];
  currentIndex = 0;
  currentItem: Video;

  api: VgAPI;
  constructor(public videoService : VideoService){}

  ngOnInit(){
    this.clips = this.videoService.getVideos();
    console.log(this.clips);
    this.currentItem = this.clips[this.currentIndex];
  }




  onPlayerReady(api: VgAPI) {
      this.api = api;

      this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
      this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
      // this.api.play();
  }

  nextVideo() {
      this.currentIndex++;

      if (this.currentIndex === this.clips.length ) {
          // this.api.pause();
          return
      }

      this.currentItem = this.clips[ this.currentIndex ];
  }

  playVideo() {
      this.api.play();
  }

  onClickPlaylistItem(item: Video, index: number) {
      this.currentIndex = index;
      this.currentItem = item;
  }

}
