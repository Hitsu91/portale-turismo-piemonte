import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displaySearch = false;
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang || translate.defaultLang;
  }

  ngOnInit() {}

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = this.translate.currentLang || this.translate.defaultLang;
  }
}
