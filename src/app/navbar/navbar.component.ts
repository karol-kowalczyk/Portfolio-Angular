import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  active = false;

  constructor(public translate: TranslateService) {}

  toggleNav() {
    this.isMenuOpen = !this.isMenuOpen;
    const burgerLinks = document.querySelector('.burgerLinks') as HTMLElement | null;
    if (burgerLinks) {
      burgerLinks.classList.toggle('show');
    }
  }

  
}