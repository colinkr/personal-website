import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-website';
  currentLang: string = 'DE';
  currentPage: string = 'main';

  changeLang(currentLang: string): void {
    if(currentLang === 'DE') {
      this.currentLang = 'EN';
    } else if(currentLang === 'EN') {
      this.currentLang = 'DE';
    }
  }

  changeSite(link: string): void {
    this.currentPage = link;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
