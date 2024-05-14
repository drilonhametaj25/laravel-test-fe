import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-label-content',
  templateUrl: './label-content.component.html',
  styleUrls: ['./label-content.component.scss'],
})
export class LabelContentComponent implements OnInit {
  @Input() label: string;
  @ViewChild('container')
  private containerRef: ElementRef;
  @ViewChild('index')
  private indexRef: ElementRef;
  mode: 'free' | 'bottomed' | 'attached' = 'free';
  // @HostListener('window:scroll', ['$event'])
  // onScroll(ev: any) {
  //   if (true) {
  //     if (
  //       !this.indexRef ||
  //       this.indexRef === undefined ||
  //       !this.containerRef ||
  //       this.containerRef === undefined
  //     ) {
  //       return;
  //     }
  //     if (
  //       window.pageYOffset <=
  //         this.distanceFromTop(this.containerRef.nativeElement) -
  //           this.headerHeight() &&
  //       this.mode !== 'free'
  //     ) {
  //       this.mode = 'free';
  //       return;
  //     }
  //     if (
  //       this.indexRef.nativeElement.getBoundingClientRect().top -
  //         this.headerHeight() <=
  //         0 ||
  //       (this.indexRef.nativeElement.getBoundingClientRect().top -
  //         this.headerHeight() >=
  //         0 &&
  //         this.mode === 'bottomed')
  //     ) {
  //       const mainContainerHeight = document.getElementById('sondaggioForm');
  //       if (
  //         mainContainerHeight &&
  //         window.pageYOffset +
  //           this.headerHeight() +
  //           this.indexRef.nativeElement.clientHeight >=
  //           mainContainerHeight.clientHeight + mainContainerHeight.offsetTop
  //       ) {
  //         this.mode = 'bottomed';
  //       } else {
  //         this.mode = 'attached';
  //       }
  //     }
  //   }
  // }
  constructor() {}

  ngOnInit(): void {}

  private distanceFromTop(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }

  private headerHeight(): number {
    return 64;
  }

  private elementHeight(id: string) {
    return document?.getElementById(id)?.clientHeight || 0;
  }
}
