import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { AccessService } from "../../services/access.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  public logInForm: FormGroup;

  constructor(private accessService: AccessService, private fb: FormBuilder) {}

  ngOnInit() {
    this.creatForm();
  }

  private creatForm(): void {
    this.logInForm = this.fb.group({
      userName: new FormControl("", [Validators.required]),
    });
  }

  onFormSubmit(): void {
    if (this.logInForm.invalid) {
      return;
    }
    const username: string = this.logInForm.get("userName").value;
    this.accessService.onLogin(username);
  }
}
