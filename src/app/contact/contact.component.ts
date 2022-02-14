import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogPrivacyPolicyComponent } from '../dialog-privacy-policy/dialog-privacy-policy.component';
import { DialogImprintComponent } from '../dialog-imprint/dialog-imprint.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  DialogPrivacyPolicyComponent = DialogPrivacyPolicyComponent;
  DialogImprintComponent = DialogImprintComponent;


  contact = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://tunglam-dao.com.de/sendMail.php', // Ex. www.my-domain/sendMail.php

    body: (payload: any) => JSON.stringify(payload),

    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  openSnackBar(name: string) {
    this._snackBar.open(name + ', thank you for your message!', 'OK');
  }

  ngOnInit(): void {
  }

  onSubmit(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => console.log(response),
          error: (error) => console.error(error),
          complete: () => console.info('send post complete'),
        });
    }
  }

}
