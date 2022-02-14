import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.toSection('home');
  }
  title = 'Lam Dao';
  public navbarOpened = false;
  static navbarOpened: boolean;

  sidenav = SidenavComponent; //this is the way to assign a Component into another. Now we can control the actions of sidenav from here.

  /**
   * next/prev section
   */
  changeSection() {
      this.toSection('home');
      this.toSection('quote');
      this.toSection('about');
      this.toSection('projects');
      this.toSection('contact');
  }
  toSection(x: string) {
    if (window.innerHeight >480 && this.isInViewport(x)) {
      document.getElementById(x)!.classList.add('active');
      this.sidenav.changeActiveStickOnSidenav(x); //this function is in file sidenav.js
    } 
    else {
      document.getElementById(x)!.classList.remove('active');
    }

  }
  isInViewport(element: any) {

    const rect = document.getElementById(element)!.getBoundingClientRect();
    return (
      (
        rect.top >= 0
        &&
        rect.top <= 0.7 * (window.innerHeight || document.documentElement.clientHeight)
      )

      ||

      (
        rect.bottom >= 0.6 * (window.innerHeight || document.documentElement.clientHeight)
        &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      )

    );
  }
}

