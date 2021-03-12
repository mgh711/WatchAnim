import { Component, OnInit } from '@angular/core';
import { Videos } from '../videos';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  readonly videos = Videos.videos();

  constructor() { }

  ngOnInit() {
  }

}
