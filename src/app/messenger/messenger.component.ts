import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-messenger',
  templateUrl: 'messenger.template.html',
  styleUrls: ['messenger.style.css']
})
export class MessengerComponent implements OnInit{
  chosenDialog: string;
  login: string;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams
      .pipe(
        filter(params => params.login)
      )
      .subscribe(params => {
        this.login = params.login;
      })
  }

  changeDialog(participant: string) {
    this.chosenDialog = participant;
  }

}
