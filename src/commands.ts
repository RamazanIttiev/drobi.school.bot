import {Api, type Bot, type CommandContext, Context, type RawApi} from "grammy";
import {FLOW_FILE, RATES_FILE, RULES_FILE, RULES_URL, SITE_URL, WELCOME_FILE} from "./utils/constants.ts";
import {readFile} from "./utils/fs.ts";
import {replyWithContent} from "./utils/messages.ts";

export const runCommands = (bot: Bot<Context, Api<RawApi>>) => {
  bot.api.setMyCommands([
    { command: "start", description: "Добро пожаловать в команду DROBI SCHOOL!" },
    { command: 'site', description: 'Сайт школы' },
    { command: "flow", description: "Как проходит твоя работа" },
    { command: "guide", description: "Что делать после каждого урока" },
    { command: "rates", description: "Информация о заработной плате" },
    { command: "rules", description: "Правила школы" },
  ]).catch((err) => console.error("Failed to set commands:", err));

  bot.api.setChatMenuButton({
    menu_button: {
      type: "commands",
    },
  }).catch((err) => console.error("Failed to set menu button:", err));

  bot.command("start", async (ctx: CommandContext<Context>) => {
    const message = await readFile(WELCOME_FILE)
    await ctx.reply(message, {parse_mode: "HTML", link_preview_options: {
        is_disabled: true,
      }});
  });

  bot.command("guide", async (ctx) => await replyWithContent({
    ctx,
    filePath: RULES_FILE,
  }));

  bot.command("rates", async (ctx) => await replyWithContent({
    ctx,
    filePath: RATES_FILE,
  }));

  bot.command("flow", async (ctx) => await replyWithContent({
    ctx,
    filePath: FLOW_FILE,
  }));

  bot.command("site", async (ctx) => await replyWithContent({
    ctx,
    plainText: SITE_URL,
  }));

  bot.command("rules", async (ctx) => await replyWithContent({
    ctx,
    filePath: RULES_URL,
  }));
}