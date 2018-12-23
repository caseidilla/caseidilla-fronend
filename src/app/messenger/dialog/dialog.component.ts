import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.template.html',
  styleUrls: ['dialog.style.css']
})
export class DialogComponent {
  @Input()
  chosenDialog: string;
  @Input()
  login: string;
}
