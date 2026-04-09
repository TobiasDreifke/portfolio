import { Banner } from "./banner/banner";
import { TopElements } from './top-elements/top-elements';
import { Component, signal, inject } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [Banner, TopElements,  TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
//  constructor(private translate: TranslateService) {
//   this.translate.get('hero.h3').subscribe(value => {
//     console.log('hero.h3 =', value);
//   });
}

