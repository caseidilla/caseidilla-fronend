import * as moment from "moment";

export class MessageModel {
  type: string;
  body: string;
  timestamp: moment.Moment;
}
