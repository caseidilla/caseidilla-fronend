import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ContactListComponent} from "../contact-list.component";
import {DialogModel} from "../model/dialog.model";
import {HttpClient} from "@angular/common/http";
import {SecretModel} from "../model/secret.model";

@Component({
  selector: 'app-invite-dialog',
  templateUrl: './invite-dialog.component.html',
  styleUrls: ['./invite-dialog.component.css']
})
export class InviteDialogComponent implements OnInit {
  secret: string;

  constructor(
    public dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    private http: HttpClient) {
  }

  ngOnInit() {
  }

  onGenerate() {
    this.http.get(`api/${this.data.login}/invite`).subscribe((response: SecretModel) => {
      this.secret = response.secret;
    });
  }
}
