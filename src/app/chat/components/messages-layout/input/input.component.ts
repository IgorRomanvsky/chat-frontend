import { Component, OnInit, Input } from "@angular/core";
import { MessagesService } from "src/app/chat/services/messages.service";
import { AccessService } from "src/app/access/services/access.service";
import { Message } from "src/app/chat/types/message.type";
import { User } from "src/app/shared/types/user.type";
import { MatSnackBar } from "@angular/material/snack-bar";

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
    private _snackBar: MatSnackBar,
    private messageService: MessagesService,
    private accessService: AccessService
  ) {}

  ngOnInit() {
    this.currentUserId = this.accessService.loggedUser._id;
  }

  public onInputKeyPress(pressedKeyCode: number): void {
    const enterKeyCode = 13;
    if (pressedKeyCode === enterKeyCode) {
      this.onSendNewMessage();
    }
  }

  public onSendNewMessage(): void {
    if (!this.conversationPartner) {
      this.openSnackBarNotification(
        "Please selected a user to send him a message"
      );
      return;
    }

    if (!this.messageText.length) {
      this.openSnackBarNotification("Message must include text");
      return;
    }

    const message: Message = {
      text: this.messageText,
      sender: this.currentUserId,
      receiver: this.conversationPartner._id,
      conversationId: this.conversationId,
    };
    this.messageText = "";
    this.messageService.onSendNewMessage(message);
  }

  private openSnackBarNotification(notificationText: string): void {
    this._snackBar.open(notificationText, "", {
      duration: 2000,
    });
  }
}
