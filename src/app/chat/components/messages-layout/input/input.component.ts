import { Component, OnInit, Input } from "@angular/core";
import { MessagesService } from "src/app/chat/services/messages.service";
import { AccessService } from "src/app/access/services/access.service";
import { Message } from "src/app/chat/types/message.type";
import { User } from "src/app/shared/types/user.type";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
})
export class InputComponent implements OnInit {
  @Input() conversationPartner: User;
  @Input() conversationId: string;
  public messageText = "";
  private currentUserId: string;

  constructor(
    private messageService: MessagesService,
    private accessService: AccessService
  ) {}

  ngOnInit() {
    this.currentUserId = this.accessService.loggedUser._id;
  }

  public onSendNewMessage(): void {
    const message: Message = {
      text: this.messageText,
      sender: this.currentUserId,
      receiver: this.conversationPartner._id,
      conversationId: this.conversationId,
    };
    this.messageService.onSendNewMessage(message);
  }
}
