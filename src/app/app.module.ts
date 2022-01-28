import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './logo/logo.component';
import { BtnMenuComponent } from './btn-menu/btn-menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { QuoteComponent } from './quote/quote.component';
import { AboutComponent } from './about/about.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { IsInViewPortService } from './is-in-view-port.service';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    BtnMenuComponent,
    NavbarComponent,
    HomeComponent,
    QuoteComponent,
    AboutComponent,
    SidenavComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [IsInViewPortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
