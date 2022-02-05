import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogProjectsFullDetailComponent } from '../dialog-projects-full-detail/dialog-projects-full-detail.component';


export interface DialogData {
  projectIndex: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  appComponent = AppComponent;
  projects = [
    {
      id: 'one',
      situation: 'GO TO PROJECT',
      name: 'RING OF FIRE',
      backgroundImg: './assets/img/ringoffire/startbox.png',
      programmingLanguage: 'Angular, Firebase',
      description: 'A multi-player game. \n The players play together on different devices.\n Firebase get the data of the game and send to their devices.',
      href: 'https://ring-of-fire-9362f.web.app/'
    },
    {
      id: 'two',
      situation: 'GO TO PROJECT',
      name: 'EL POLLO LOCO',
      backgroundImg: './assets/img/elpollo/intro.png',
      programmingLanguage: 'Bootstrap, Javascript',
      description: 'This project is a game. \n All animations of the game are built on a HTML-canvas. \n The structure of all models are built with oriented-programming.',
      href: 'http://tung-lam-dao.developerakademie.com/El-Pollo-Loco---Game/'
    },
    {
      id: 'three',
      situation: 'GO TO PROJECT',
      name: 'POKEDEX',
      backgroundImg: './assets/img/pokedex/screenPokedex.png',
      programmingLanguage: 'Bootstrap, Javascript, API',
      description: 'This Web-app shows all Pokemons by fetching their Data from Pokeapi,\n a full RESTful API detailing everything about the Pokémon main game series.',
      href: 'http://tung-lam-dao.developerakademie.com/Pokedex2/'
    },
    {
      id: 'four',
      situation: "IT'S BEING PREPARED. BUT TAKE A LOOK?",
      name: 'KANBAN',
      backgroundImg: './assets/img/kanban/Board.PNG',
      programmingLanguage: 'Bootstrap, Javascript, PHP',
      description: 'A Web-app with feature drag-drop that was built with Javascript.\n The web-app is able to be used by many users that conecting together on server.',
      href: 'http://gruppe-115.developerakademie.net/task.html'
    },
    {
      id: 'five',
      situation: 'GO TO PROJECT',
      name: 'VIET-VILLAGE',
      backgroundImg: './assets/img/vietvillage/screenVietvillage.png',
      programmingLanguage: 'Bootstrap, Javascript',
      description: 'A restaurant website based on Javascript, \n includes feature e-commerce from platform Gloriafood and feature Reservation from platform Opentable.',
      href: 'https://vietvillage.restaurant/'
    },
  ]
  opened: any;
  stack = true;
  ring = false;
  constructor(
    public appCpn: AppComponent,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  /**
  *  switches the stack of projects between stack-form and ring-form
  */
  transformProjectsContainer() {
    this.stack = !this.stack;
    this.ring = !this.ring;
  }


  openDialog(i: any): void {
    this.opened = i;
    const dialogRef = this.dialog.open(DialogProjectsFullDetailComponent, {
      data: {projectIndex: this.opened}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


}