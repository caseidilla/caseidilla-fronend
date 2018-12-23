import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {DialogItemModel} from "./model/dialog-item.model";
import {MatDialog} from "@angular/material";
import {ChangeNameDialogComponent} from "./change-name-dialog/change-name-dialog.component";
import {LockDialogComponent} from "./lock-dialog/lock-dialog.component";
import {ChangePinDialogComponent} from "./change-pin-dialog/change-pin-dialog.component";
import {HelpDialogComponent} from "./help-dialog/help-dialog.component";
import {InviteDialogComponent} from "./invite-dialog/invite-dialog.component";
import {CreateDialogDialogComponent} from "./create-dialog-dialog/create-dialog-dialog.component";
import {ShowHiddenDialogComponent} from "./show-hidden-dialog/show-hidden-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-list',
  templateUrl: 'contact-list.template.html',
  styleUrls: ['contact-list.style.css']
})
export class ContactListComponent {
  @Input()
  login: string;
  @Output()
  dialogHasBeenChosen = new EventEmitter<string>();
  contactList: Observable<DialogItemModel[]>;
  pin: string;

  constructor(private http: HttpClient,
              public dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.pin = null;
    this.refreshContactList();
  }

  openChangeNameDialog(participant: string) {
    const dialogRef = this.dialog.open(ChangeNameDialogComponent, {
      width: '300px',
      data: {login: this.login, participant: participant}
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshContactList();
    });
  }

  lockDialog(participant: string) {
    const dialogRef = this.dialog.open(LockDialogComponent, {
      width: '300px',
      data: {login: this.login, participant: participant}
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshContactList();
    });
  }

  dialogSelect(participant: string) {
    this.dialogHasBeenChosen.emit(participant);
  }

  onChangePinClick() {
    const dialogRef = this.dialog.open(ChangePinDialogComponent, {
      width: '300px',
      data: {login: this.login}
    });
  }

  onHelpClick() {
    const dialogRef = this.dialog.open(HelpDialogComponent, {
      width: '300px'
    });
  }

  onInviteClick() {
    const dialogRef = this.dialog.open(InviteDialogComponent, {
      width: '300px',
      data: {login: this.login}
    });
  }

  onCreateNewDialogClick() {
    const dialogRef = this.dialog.open(CreateDialogDialogComponent, {
      width: '300px',
      data: {login: this.login}
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshContactList();
    });
  }

  onShowHiddenDialogsClick() {
    const dialogRef = this.dialog.open(ShowHiddenDialogComponent, {
      width: '300px',
      data: {login: this.login}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pin = result;
      this.refreshContactList();
    });
  }

  onHideDialogs() {
    this.pin = null;
    this.refreshContactList();
  }

  private refreshContactList() {
    if (this.pin == null) {
      this.contactList = this.http.get<DialogItemModel[]>(`api/${this.login}/dialogs`);
    } else {
      this.contactList = this.http.post<DialogItemModel[]>(`api/${this.login}/dialogs/hidden`, {pin: this.pin});
    }
  }

  onLogOutClick() {
    this.router.navigate(['/login']);
  }
}
