import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ConversationService } from "../../services/conversations.service";
import { User } from "src/app/shared/types/user.type";
import { Conversation } from "../../types/conversations.type";
import { Message } from "../../types/message.type";
import { MessagesService } from "../../services/messages.service";

@Component({
  selector: "app-chat-page",
  templateUrl: "./chat-page.component.html",
  styleUrls: ["./chat-page.component.scss"],
})
export class ChatPageComponent implements OnInit, OnDestroy {
  public conversation: Conversation;
  public conversationPartner: User;
  private conversationSub: Subscription;
  private newMsgSub: Subscription;
  public newMessages: Message[] = [];

  constructor(
    private conversationService: ConversationService,
    private messageService: MessagesService
  ) {}

  ngOnInit() {
    this.conversationSub = this.conversationService.updateConversationWithRelevantMessagesSub.subscribe(
      (conversation: Conversation) => {
        this.conversation = conversation;
      }
    );

    this.newMsgSub = this.messageService.chatMessageUpdateSub.subscribe(
      (newmsg: Message) => {
        if (
          this.conversation &&
          newmsg.conversationId === this.conversation._id
        ) {
          this.checkIfUpdateNewMessage(newmsg);
        } else {
          this.newMessages.push(newmsg);
        }
      }
    );
  }

  ngOnDestroy() {
    this.conversationSub.unsubscribe();
    this.newMsgSub.unsubscribe();
  }

  // trigger change detection
  private checkIfUpdateNewMessage(newmsg: Message): void {
    const copyOfConversation = Object.assign({}, this.conversation);
    copyOfConversation.messages.push(newmsg);
    this.conversation = copyOfConversation;
  }

  public updateConversationPartner(user: User): void {
    this.clearNewMessagesBySelectedUserToChat(user._id);
    this.conversationPartner = user;
  }

  public clearNewMessagesBySelectedUserToChat(userId: string): void {
    this.newMessages = [
      ...this.newMessages.filter((msg: Message) => msg.sender !== userId),
    ];
  }
}
