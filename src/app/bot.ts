import { Client, Message } from "discord.js";
import { inject as Inject, injectable as Injectable } from "inversify";
import { TYPES } from "../types";
import { MessageResponder } from "./services/message-responder";

@Injectable()
export class Bot {
  private client: Client;
  private readonly token: string;
  private messageResponder: MessageResponder;

  constructor(
    @Inject(TYPES.Client) client: Client,
    @Inject(TYPES.Token) token: string,
    @Inject(TYPES.MessageResponder) messageResponder: MessageResponder
  ) {
    this.client = client;
    this.token = token;
    this.messageResponder = messageResponder;
  }

  public listen(): Promise<string> {
    this.client.on("message", (message: Message) => {
      if (message.author.bot) {
        console.log("Ignoring bot message!");
        return;
      }

      console.log("Message received! Contents: ", message.content);

      this.messageResponder
        .handle(message)
        .then(() => {
          console.log("Response sent!");
        })
        .catch(() => {
          console.log("Response not sent.");
        });
    });

    return this.client.login(this.token);
  }
}
