import { NgModule, Input } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ChatRoutes } from "./chat.routing.module";
import { ChatPageComponent } from "./pages/chat-page/chat-page.component";
import { InputComponent } from "./components/messages-layout/input/input.component";
import { MessagesLayoutComponent } from "./components/messages-layout/messages-layout.component";
import { MessageComponent } from "./components/messages-layout/message/message.component";
import { UsersComponent } from "./components/users/users.component";
import { CoreModule } from "../core/core.module";

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    RouterModule.forChild(ChatRoutes),
  ],
  declarations: [
    UsersComponent,
    ChatPageComponent,
    InputComponent,
    MessagesLayoutComponent,
    MessageComponent,
  ],
  exports: [ChatPageComponent],
})
export class ChatModule {}
