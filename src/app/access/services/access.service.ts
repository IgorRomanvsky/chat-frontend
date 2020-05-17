import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { User } from "src/app/shared/types/user.type";
import { Router } from "@angular/router";
import { ChatSocketService } from "src/app/chat/services/socket.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AccessService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private chatSocketService: ChatSocketService
  ) {}
  private userIsLogged = false;
  public loggedUser: User;
  public updateLoggedUserSub: Subject<User> = new Subject<User>();

  public onLogin(userName: string) {
    const user: User = {
      userName,
    };
    this.http.post(environment.userUrl, user).subscribe((loggedUser: User) => {
      this.userIsLogged = true;
      this.loggedUser = loggedUser;
      this.updateLoggedUserSub.next(this.loggedUser);
      this.chatSocketService.establishWebSocketConation(loggedUser._id);
      this.router.navigate(["/chat"]);
    });
  }

  public checkIfLoggedIn(): boolean {
    return this.userIsLogged;
  }
}
