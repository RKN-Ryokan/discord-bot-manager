# RNK - Discord Bot Manager

A Discord Bot Manager to try to improve the current system of Discord bots.

Discord bots managing currently works as follows:

- You have to create an application an in this application create a bot
- One bot his assigned to one responsability on your server
- This bot can only be used by one person at the time on the server. If
  another person calls your bot in another channel you'll loose the bot

Our system would work like this:

- One bot works permanently in the server
- When you ask a question to the bot he will answer
- If you ask the bot to perform a specific action like putting music on a
  channel, he's going to go pull a bot from a pool of bots and assign him to
  you

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

### Prerequisites

To test the Manager Bot on a server you'll need to have:

```
  1. The latest version of NodeJS
  2. NPM installed if it isn't installed with the NodeJS package
  3. Git to clone the project and work on it (versionning PLZ guys!)
  4. If you want a good editor use Visual Studio Code (ask the manager for
  the different extensions you need to work more easily on the project)
  5. You'll have to create some discord bots (ask google how to do it)
```

### Installing

To install the project you first need to clone it on your desktop

Use `git clone https://github.com/RKN-Ryokan/discord-bot-manager`

Once you've successfully cloned the project on your computer.

Use `npm install` to install all dependencies.

After all dependencies are installed, you'll have to ask one of the managers for
the json file containing an example of all bots with fake tokens.
Please check the correct syntax in the .env.example file.

To compile all the files use `npm run watch`. Once this has been done don't
close your terminal. When changing files it will recompile automatically your
code.

Once your code is compilled open another terminal. Use `npm run start`
The bot is now running. You can try it in your discord server.

## Running the tests

TODO

### Break down into end to end tests

Explain what these tests test and why

## Built With

- [NodeJS](https://nodejs.org/en/) - Used for building the server
- [Typescript](https://www.typescriptlang.org/) - Used as main coding language for the project
- [Inversify](https://github.com/inversify/InversifyJS) - Used for typescript injections
- [DiscordJS](https://discord.js.org/#/) - Used to manage the bots

## Authors

- **Gargarenris** - _Initial work_ - [Gargarenris](https://github.com/sebastian-gonzalezmoran)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
