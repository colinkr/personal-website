import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public currentLang: string = 'DE';

  constructor() { }

  changeLang(currentLang: string): void {
    if(currentLang === 'DE') {
      this.currentLang = 'EN';
    } else if(currentLang === 'EN') {
      this.currentLang = 'DE';
    }
  }
}


