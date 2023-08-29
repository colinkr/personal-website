import { Component } from '@angular/core';
import {LanguageService} from "./services/language/language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public languageService: LanguageService) {
  }

  title = 'personal-website';
  public currentPage: string = 'main';

  changeSite(link: string): void {
    this.currentPage = link;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
