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
const botbuilder_1 = require("botbuilder");
/**
 * Simple bot that echoes received messages.
 */
class ConsoleEchoBot {
    /**
     * Driver code for the bot. This bot only responds to "Message"-type
     * Activities. If the user's message is "quit", the process will exit.
     * @param turnContext Context for the current turn of conversation with the user.
     */
    onTurn(turnContext) {
        return __awaiter(this, void 0, void 0, function* () {
            // Only respond to "Message"-type Activities.
            if (turnContext.activity.type === botbuilder_1.ActivityTypes.Message) {
                // If the user sent a simple "quit" message, close the Node.js process.
                if (turnContext.activity.text.toLowerCase() === 'quit') {
                    process.exit();
                    // Otherwise echo back to the user the received message.
                }
                else if (turnContext.activity.text) {
                    yield turnContext.sendActivity(`You sent '${turnContext.activity.text}'`);
                }
            }
        });
    }
}
exports.ConsoleEchoBot = ConsoleEchoBot;
