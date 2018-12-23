import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import {ContactListComponent} from "../contact-list.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ShowHiddenDialogModel} from "../model/show-hidden-dialog.model";
import {DialogModel} from "../model/dialog.model";

@Component({
  selector: 'app-show-hidden-dialog',
  templateUrl: './show-hidden-dialog.component.html',
  styleUrls: ['./show-hidden-dialog.component.css']
})
export class ShowHiddenDialogComponent implements OnInit {

  pin: string;

  constructor(
    public dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    private http: HttpClient,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }


  onCancelClick() {
    this.dialogRef.close();
  }

  onOkClick() {
    this.http.post(`api/${this.data.login}/dialogs/hidden`, {pin: this.pin}).subscribe(() => {
        this.dialogRef.close(this.pin);
      },
      (error: HttpErrorResponse) => {
        this.snackBar.open(error.error.message, null, {duration: 3000});
        this.dialogRef.close(null);
      });
  }
}
