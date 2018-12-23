import {Component, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {partition} from "rxjs/operators";
import {MatInput} from "@angular/material";

@Component({
  selector: 'app-new-message',
  templateUrl: 'new-message.template.html',
  styleUrls: ['new-message.style.css']
})
export class NewMessageComponent {
  @Input()
  login: string;
  @Input()
  chosenDialog: string;

  constructor(private http: HttpClient){
  }

  sendMessage(message: MatInput) {
    if (message.value != '') {
      this.http.post(`api/${this.login}/dialog/send`, {body: message.value, participant: this.chosenDialog})
        .subscribe();
      message.value = '';
    }
  }
}
