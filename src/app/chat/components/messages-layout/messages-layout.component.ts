import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  ViewChild,
  SimpleChanges,
  ElementRef,
} from "@angular/core";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { Conversation } from "../../types/conversations.type";
import { User } from "src/app/shared/types/user.type";

@Component({
  selector: "app-messages-layout",
  templateUrl: "./messages-layout.component.html",
  styleUrls: ["./messages-layout.component.scss"],
})
export class MessagesLayoutComponent implements OnInit, OnChanges {
  @ViewChild("messageContainer") messageContainer: ElementRef;
  @Input() conversationPartner: User;
  @Input() conversation: Conversation;
  constructor() {}
  ngOnInit() {}

  ngOnChanges(change: SimpleChanges) {
    if (change.conversation) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    }, 10);
  }
}
