import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatSnackBarConfig} from "@angular/material";
import {ContactListComponent} from "../contact-list.component";
import {DialogModel} from "../model/dialog.model";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-lock-dialog',
  templateUrl: 'lock-dialog.template.html',
  styleUrls: ['lock-dialog.style.css']
})
export class LockDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    private http: HttpClient,
    public snackBar: MatSnackBar) {
  }

x
  onOkClick(pin: string): void {
    this.http.post(`api/${this.data.login}/dialog/hide`, {participant: this.data.participant, pin: pin})
      .subscribe(() => {
        },
        (error: HttpErrorResponse) => {
          if (error.error.message === 'No pin') {
            this.openSnackBar("Please, create a pin", {duration: 3000})
          } else if (error.error.message === 'Wrong pin'){
            this.openSnackBar("Wrong pin!", {duration: 3000})
          }
        });
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  private openSnackBar(message: string, configForSnack: MatSnackBarConfig) {
    this.snackBar.open(message, null, configForSnack);
  }
}
