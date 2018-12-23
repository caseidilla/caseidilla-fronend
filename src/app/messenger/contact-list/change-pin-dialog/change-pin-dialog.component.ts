import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ContactListComponent} from "../contact-list.component";
import {DialogModel} from "../model/dialog.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-change-pin-dialog',
  templateUrl: './change-pin-dialog.component.html',
  styleUrls: ['./change-pin-dialog.component.css']
})
export class ChangePinDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    private http: HttpClient) {
  }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onOkClick(oldPin: string, newPin: string) {
    this.http.post(`api/${this.data.login}/setPin`, {pin: newPin, oldPin: oldPin}).subscribe();
    this.dialogRef.close();
  }
}
