import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById(
      'theme-css'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = "assets/layout/styles/theme/"+ theme + '/theme.css';
    }
  }
  
}
