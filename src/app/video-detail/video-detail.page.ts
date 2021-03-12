import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Video, Videos } from '../videos';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.page.html',
  styleUrls: ['./video-detail.page.scss'],
})
export class VideoDetailPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
    ) { }

  numero: string;
  video: Video;
  videoLink: any;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.numero = params['numero']
      this.video = Videos.videos().find(v => v.numero == this.numero);
      this.videoLink = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.lien)
    })
  }

}
