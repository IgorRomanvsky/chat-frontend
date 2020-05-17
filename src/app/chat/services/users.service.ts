import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AccessService } from "src/app/access/services/access.service";
import { environment } from "src/environments/environment";
import { User } from "src/app/shared/types/user.type";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UsersServices {
  constructor(private http: HttpClient, private accessService: AccessService) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.userUrl).pipe(
      map((res: User[]) => {
        return (res = this.filterCurrentUserFromListOfUsers(res));
      })
    );
  }

  private filterCurrentUserFromListOfUsers(userList: User[]): User[] {
    const currentUser: User = this.accessService.loggedUser;
    return userList.filter((user: User) => user._id !== currentUser._id);
  }
}
