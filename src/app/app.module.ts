import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatList, MatListModule, MatMenuModule,
  MatSelectModule, MatSnackBarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {MessengerComponent} from "./messenger/messenger.component";
import {ContactListComponent} from "./messenger/contact-list/contact-list.component";
import {DialogComponent} from "./messenger/dialog/dialog.component";
import {ChangeNameDialogComponent} from "./messenger/contact-list/change-name-dialog/change-name-dialog.component";
import {LockDialogComponent} from "./messenger/contact-list/lock-dialog/lock-dialog.component";
import {MessageListComponent} from "./messenger/dialog/message-list/message-list.component";
import {NewMessageComponent} from "./messenger/dialog/new-message/new-message.component";
import { ChangePinDialogComponent } from './messenger/contact-list/change-pin-dialog/change-pin-dialog.component';
import { HelpDialogComponent } from './messenger/contact-list/help-dialog/help-dialog.component';
import { InviteDialogComponent } from './messenger/contact-list/invite-dialog/invite-dialog.component';
import { CreateDialogDialogComponent } from './messenger/contact-list/create-dialog-dialog/create-dialog-dialog.component';
import { ShowHiddenDialogComponent } from './messenger/contact-list/show-hidden-dialog/show-hidden-dialog.component';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    MessengerComponent,
    ContactListComponent,
    DialogComponent,
    ChangeNameDialogComponent,
    LockDialogComponent,
    MessageListComponent,
    NewMessageComponent,
    ChangePinDialogComponent,
    HelpDialogComponent,
    InviteDialogComponent,
    CreateDialogDialogComponent,
    ShowHiddenDialogComponent,
    RegisterComponent,
    LoginComponent
  ],
  entryComponents: [
    ChangeNameDialogComponent,
    LockDialogComponent,
    ChangePinDialogComponent,
    HelpDialogComponent,
    InviteDialogComponent,
    CreateDialogDialogComponent,
    ShowHiddenDialogComponent
    // NewTagComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatListModule,
    MatSnackBarModule,
    MatMenuModule,
    QuillModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
