import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class IconComponent implements OnInit, OnChanges {
  @Input() name!: string;

  svgContent: SafeHtml = '';
  isAnimating = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadSvg();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] && !changes['name'].firstChange) {
      this.loadSvg();
    }
  }

  private async loadSvg() {
    const res = await fetch(`assets/img/icons/${this.name}.svg`);
    const raw = await res.text();
    this.svgContent = this.sanitizer.bypassSecurityTrustHtml(raw);
  }

  triggerAnimation() {
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 600);
  }
}