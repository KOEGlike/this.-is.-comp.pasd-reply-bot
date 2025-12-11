// test- ignore me
import { App, LogLevel } from "@slack/bolt";
import * as dotenv from "dotenv";
dotenv.config();

const COMPASS_CHANNEL = process.env.COMPASS_CHANNEL!;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: LogLevel.INFO,
});


app.event("message", async ({ event, say, client, logger }) => {
  logger.info("new message: ", event);
  if (event.channel != COMPASS_CHANNEL) {
    return;
  }

  logger.debug("new message");

  if (!(event.subtype === undefined
    || event.subtype === 'bot_message'
    || event.subtype === 'file_share'
    || event.subtype === 'thread_broadcast')) {
    return;
  }

  if (event.text === undefined) {
    return;
  };

  if (!event.text.startsWith("this. is.")) {
    return;
  }

  say(event.text);
});

(async () => {


  await app.start();

  console.log(`⚡️ Slack Bolt app is running!`);
})();