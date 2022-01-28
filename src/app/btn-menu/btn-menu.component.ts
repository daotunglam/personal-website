import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-btn-menu',
  templateUrl: './btn-menu.component.html',
  styleUrls: ['./btn-menu.component.scss']
})
export class BtnMenuComponent implements OnInit {

  appCpn = AppComponent;
  constructor() { }

  ngOnInit(): void {
  }


  transformBtnMenu() {
    this.appCpn.navbarOpened = !this.appCpn.navbarOpened;
  }

}
