import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {MessageModel} from "../model/message.model";
import {BehaviorSubject, interval, Observable, timer} from 'rxjs';
import {concatMap, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-message-list',
  templateUrl: 'message-list.template.html',
  styleUrls: ['message-list.style.css']
})
export class MessageListComponent implements OnChanges {
  @Input()
  login: string;
  @Input()
  chosenDialog: string;

  polledMessages$: Observable<MessageModel[]>;
  load$ = new BehaviorSubject('');

  constructor(private http: HttpClient) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let params = new HttpParams().set('participant', this.chosenDialog);
    const messages$ = this.http.get<MessageModel[]>(`api/${this.login}/dialog`, {params: params});
    this.polledMessages$ = this.load$.pipe(
      switchMap(_ => timer(0, 1000).pipe(
        concatMap(_ => messages$)
      ))
    );
  }

}
