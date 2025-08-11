import {Bot, type CommandContext, Context} from "grammy";
import fs from 'node:fs/promises';

const readFile = async (path: string)  => {
  try {
    return await fs.readFile(path, {encoding: "utf8"})
  } catch (err) {
    console.error(err);
    return 'Error reading file';
  }
}

// Initialize bot with mock token
const bot = new Bot(process.env.BOT_TOKEN || '');

// Define bot commands for the menu
bot.api.setMyCommands([
  { command: "start", description: "Start the bot and get a welcome message" },
  { command: "rates", description: "Get help and usage instructions" },
]).catch((err) => console.error("Failed to set commands:", err));

// Set the menu button to show commands
bot.api.setChatMenuButton({
  menu_button: {
    type: "commands",
  },
}).catch((err) => console.error("Failed to set menu button:", err));

// Handle /start command
bot.command("start", (ctx: CommandContext<Context>) => {
  ctx.reply("Welcome to the bot! I'm here to assist you. 😊 Use /help or /info to learn more.");
});

// Handle /info command
bot.command("rates", async (ctx: CommandContext<Context>) => {
  const message = await readFile('src/rates.md')
  await ctx.reply(message);
});

// Error handling
bot.catch((err) => {
  console.error(`Error occurred: ${err}`);
});

// Start the bot
bot.start();
console.log("Bot is running...");