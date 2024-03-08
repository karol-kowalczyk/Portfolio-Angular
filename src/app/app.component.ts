import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(public router: Router, translate: TranslateService) {
     
  }

  /** loads the AOS library on init */
  ngOnInit() {
    AOS.init({});

    // Scrollen zu verschiedenen IDs nach der Navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scrollToElementOnRoute(this.router.url);
      }
    });
  }

  scrollToElementOnRoute(route: string) {
    const elementIdMap: { [key: string]: string } = {
      '/AboutmeComponent': 'aboutMe',
      '/MyskillsComponent': 'mySkills',
      '/PortfolioComponent': 'portfolio',
      '/ContactComponent': 'contact',
    };

    const elementId = elementIdMap[route];

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}