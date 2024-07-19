import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})

export class YoutubePlayerComponent implements AfterViewInit {
  @Input()
  videoId!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.createIframe(this.videoId);
  }

  createIframe(videoId: string) {
    const iframe = this.renderer.createElement('iframe');
    this.renderer.setAttribute(iframe, 'width', '320');
    this.renderer.setAttribute(iframe, 'height', '180');
    this.renderer.setAttribute(iframe, 'src', `https://www.youtube.com/embed/${videoId}?controls=1`);
    this.renderer.setAttribute(iframe, 'frameborder', '1');
    this.renderer.setAttribute(iframe, 'allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    this.renderer.setAttribute(iframe, 'allowfullscreen', 'true');

    this.renderer.appendChild(this.el.nativeElement.querySelector('.video-container'), iframe);

  // ngOnInit()
  // {
  //   const scriptTag = document.createElement('script');
  //   scriptTag.src = "https://www.youtube.com/iframe_api";
  //   document.body.appendChild(scriptTag);
  // }
  }
}
