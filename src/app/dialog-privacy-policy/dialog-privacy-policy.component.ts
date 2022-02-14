import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-privacy-policy',
  templateUrl: './dialog-privacy-policy.component.html',
  styleUrls: ['./dialog-privacy-policy.component.scss']
})
export class DialogPrivacyPolicyComponent implements OnInit {
  english_open = true;

  constructor() { }

  ngOnInit(): void {
  }

}
