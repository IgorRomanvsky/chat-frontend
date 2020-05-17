import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import * as io from "socket.io-client";
import { Message } from "../types/message.type";
import { MessagesService } from "./messages.service";

@Injectable({
  providedIn: "root",
})
export class ChatSocketService {
  public socket: SocketIOClient.Socket;
  constructor(private messageService: MessagesService) {}

  public establishWebSocketConation(userId: string) {
    this.socket = io(environment.wsUrl);
    this.socket.emit("userid", userId);
    this.initSocketEvents();
  }

  public initSocketEvents(): void {
    this.socket.on("newmsg", (msg: Message) => {
      this.messageService.chatMessageUpdateSub.next(msg);
    });
  }
}
