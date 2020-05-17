import { Component, OnInit, Input } from "@angular/core";
import { Message } from "src/app/chat/types/message.type";
import { AccessService } from "src/app/access/services/access.service";
import { User } from "src/app/shared/types/user.type";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
})
export class MessageComponent implements OnInit {
  @Input() messages: Message[];
  @Input() conversationPartner: User;
  public currentUser: User;
  constructor(private accessService: AccessService) {}

  ngOnInit() {
    this.currentUser = this.accessService.loggedUser;
  }
}
