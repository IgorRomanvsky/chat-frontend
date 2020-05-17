import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AccessService } from "src/app/access/services/access.service";
import { User } from "src/app/shared/types/user.type";
import { environment } from "src/environments/environment";
import { Subject } from "rxjs";
import { Conversation } from "../types/conversations.type";

@Injectable({
  providedIn: "root",
})
export class ConversationService {
  public updateConversationWithRelevantMessagesSub: Subject<
    Conversation
  > = new Subject<Conversation>();
  constructor(private http: HttpClient, private accessService: AccessService) {}

  public getConversationBetweenTwoUsers(
    idOfWantedUserToStartConversation: string
  ): void {
    const currentUser: User = this.accessService.loggedUser;
    // Since were not using a JWT token we need to send also the currentUser id in the header
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("current-user-id", currentUser._id);
    this.http
      .get<Conversation>(
        `${environment.conversationsUrl}/${idOfWantedUserToStartConversation}`,
        { headers }
      )
      .subscribe((conversation: Conversation) => {
        this.updateConversationWithRelevantMessagesSub.next(conversation);
      });
  }
}
