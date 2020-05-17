import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "../types/message.type";
import { environment } from "src/environments/environment";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MessagesService {
  public chatMessageUpdateSub: Subject<Message> = new Subject<Message>();

  constructor(private http: HttpClient) {}

  public onSendNewMessage(message: Message): void {
    this.http.post(environment.messages, message).subscribe((msg: Message) => {
      this.chatMessageUpdateSub.next(msg);
    });
  }
}
