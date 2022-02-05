import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, ProjectsComponent } from '../projects/projects.component';



@Component({
  selector: 'app-dialog-projects-full-detail',
  templateUrl: './dialog-projects-full-detail.component.html',
  styleUrls: ['./dialog-projects-full-detail.component.scss']
})
export class DialogProjectsFullDetailComponent implements OnInit {
  opened: any;
  constructor(
    public projectsCpn: ProjectsComponent,
    public dialogRef: MatDialogRef<DialogProjectsFullDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

  ngOnInit(): void {
    this.opened = this.data.projectIndex;
    
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
