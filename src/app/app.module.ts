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
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogProjectsFullDetailComponent } from './dialog-projects-full-detail/dialog-projects-full-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogPrivacyPolicyComponent } from './dialog-privacy-policy/dialog-privacy-policy.component';
import { DialogImprintComponent } from './dialog-imprint/dialog-imprint.component';
import {MatMenuModule} from '@angular/material/menu';

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
    ContactComponent,
    DialogProjectsFullDetailComponent,
    DialogPrivacyPolicyComponent,
    DialogImprintComponent,
  ],
  imports: [
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [IsInViewPortService, ProjectsComponent, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
