import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import { Bot } from "./app/bot";
import { Client } from "discord.js";
import { MessageResponder } from "./app/services/message-responder";
import { PingFinder } from "./app/services/ping-finder";

let container = new Container();

container
  .bind<Bot>(TYPES.Bot)
  .to(Bot)
  .inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container
  .bind<MessageResponder>(TYPES.MessageResponder)
  .to(MessageResponder)
  .inSingletonScope();
container
  .bind<PingFinder>(TYPES.PingFinder)
  .to(PingFinder)
  .inSingletonScope();

export default container;
