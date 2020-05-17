import { User } from "src/app/shared/types/user.type";

export interface Message {
  sender: User | string;
  receiver: User | string;
  text: string;
  conversationId: string;
}
