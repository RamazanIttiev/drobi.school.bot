import {Bot} from "grammy";
import {runCommands} from "./commands.ts";
import 'dotenv/config';

export const bot = new Bot(process.env.BOT_TOKEN || '');

runCommands(bot);

bot.catch((err) => {
  console.error(`Error occurred: ${err}`);
});

bot.start();
console.log("Bot is running...");