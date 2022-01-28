import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { IsInViewPortService } from '../is-in-view-port.service';
import { ProjectsComponent } from '../projects/projects.component';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  home = HomeComponent;
  quote = QuoteComponent;
  about = AboutComponent;
  projects = ProjectsComponent;
  contact = ContactComponent;
  
  constructor(
    public isInViewPort: IsInViewPortService,
    // public home: HomeComponent,
    // public quote: QuoteComponent,
    // public about: AboutComponent,
    // public projects: ProjectsComponent,
    // public contact: ContactComponent
    ) { }

  ngOnInit(): void {
  }

  static changeActiveStickOnSidenav(x: string) {
    this.removeActiveFromAllSticks();
    let stickId: any;
    switch (x) {
      case 'home':
        stickId = 'stick1';
        break;
      case 'quote':
        stickId = 'stick2';
        break;
      case 'about':
        stickId = 'stick3';
        break;
      case 'projects':
        stickId = 'stick4';
        break;
      case 'contact':
        stickId = 'stick5';
        break;
    }
    document.getElementById(stickId)!.classList.add('active')
  }

  static removeActiveFromAllSticks() {
    document.getElementById('sidenav')!.querySelectorAll('.stick').forEach(stick => {
      if (stick.classList.contains('active')) {
        stick.classList.remove('active');
      };
    });
  }



}