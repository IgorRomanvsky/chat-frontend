import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from "@angular/core";
import { User } from "src/app/shared/types/user.type";
import { UsersServices } from "../../services/users.service";
import { ConversationService } from "../../services/conversations.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit, OnDestroy {
  @Output() public setCurrentConversationPartner: EventEmitter<
    User
  > = new EventEmitter<User>();
  public users: User[];
  public selectedUserIdToChat: string;
  private userSub: Subscription;

  constructor(
    private usersService: UsersServices,
    private conversationService: ConversationService
  ) {}

  ngOnInit() {
    this.userSub = this.usersService
      .getAllUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  public onUserSelect(selectedUser: User): void {
    if (this.selectedUserIdToChat === selectedUser._id) {
      return;
    }
    this.setCurrentConversationPartner.next(selectedUser);
    this.selectedUserIdToChat = selectedUser._id;
    this.conversationService.getConversationBetweenTwoUsers(selectedUser._id);
  }
}
