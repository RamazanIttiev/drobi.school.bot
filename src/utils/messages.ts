import { type CommandContext, Context} from "grammy";
import { readFile } from "fs/promises";

interface ReplyWithContentParams {
  ctx: CommandContext<Context>,
  filePath?: string,
  plainText?: string,
  parse_mode?: "HTML" | "MarkdownV2" | undefined
  disablePreview?: boolean
}

export const replyWithContent = async (
    props: ReplyWithContentParams
)=> {
  const { ctx, filePath, plainText, parse_mode = "HTML", disablePreview = true } = props;

  if (plainText) {
    await ctx.reply(plainText, {
      link_preview_options: {
        is_disabled: disablePreview,
      },
    })
  } else if (filePath) {
    const message = await readFile(filePath, "utf-8");

    await ctx.reply(message, {
      parse_mode,
      link_preview_options: {
        is_disabled: disablePreview,
      },
    });
  }
}

