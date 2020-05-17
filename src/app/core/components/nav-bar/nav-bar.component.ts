import { Component, OnInit, OnDestroy } from "@angular/core";
import { User } from "src/app/shared/types/user.type";
import { AccessService } from "src/app/access/services/access.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit, OnDestroy {
  public currentUser: User;
  private accessSub: Subscription;

  constructor(private accessService: AccessService) {}

  ngOnInit() {
    this.accessSub = this.accessService.updateLoggedUserSub.subscribe(
      (user: User) => {
        this.currentUser = user;
      }
    );
  }

  ngOnDestroy() {}
}
