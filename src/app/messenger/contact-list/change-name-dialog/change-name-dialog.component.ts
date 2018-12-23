import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {ContactListComponent} from "../contact-list.component";
import {DialogModel} from "../model/dialog.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-change-name-dialog',
  templateUrl: 'change-name-dialog.template.html',
  styleUrls: ['change-name-dialog.style.css']
})
export class ChangeNameDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    private http: HttpClient) {
  }

  onOkClick(newName: string): void {
    this.http.post(`api/${this.data.login}/dialog/changeName`, {participant: this.data.participant, name: newName})
      .subscribe(() =>{}, () => {});
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
