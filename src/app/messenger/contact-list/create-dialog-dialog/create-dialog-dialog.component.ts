import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import {ContactListComponent} from "../contact-list.component";
import {DialogModel} from "../model/dialog.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-dialog-dialog',
  templateUrl: './create-dialog-dialog.component.html',
  styleUrls: ['./create-dialog-dialog.component.css']
})
export class CreateDialogDialogComponent implements OnInit {

  isSecret: boolean = false;


  constructor(
    public dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    private http: HttpClient,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onCreateClick(participant: string) {
    this.http.post(`api/${this.data.login}/dialog/new`, {participant: participant, secret: this.isSecret})
      .subscribe(() => {}, (error: HttpErrorResponse)=> {
        this.snackBar.open(error.error.message, null, {duration: 3000})
      });
    this.dialogRef.close();
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
