import { Message } from "./message.type";

export interface Conversation {
  _id: string;
  messages: Message[];
}
