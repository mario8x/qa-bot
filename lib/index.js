"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const consoleAdapter_1 = require("./consoleAdapter");
const bot_1 = require("./bot");
// Create the adapter which is responsible for sending and receiving messages.
// The ConsoleAdapter enables a user to chat with a bot from within their console window.
const adapter = new consoleAdapter_1.ConsoleAdapter();
// Create the bot that processes incoming Activities via its onTurn() method.
const echoBot = new bot_1.ConsoleEchoBot();
// `adapter.listen` tells the adapter to listen for incoming messages
// and events, known as "Activities."
// Activities are wrapped in TurnContext objects by the handler function.
const closeFn = adapter.listen((turnContext) => __awaiter(this, void 0, void 0, function* () {
    yield echoBot.onTurn(turnContext);
}));
// Emit a startup message with some instructions.
console.log('> Console EchoBot is online. I will repeat any message you send me!');
console.log('> Say "quit" to end.\n');
