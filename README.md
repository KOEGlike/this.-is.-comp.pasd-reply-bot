# this. is. comp.pasd reply bot

TS is a slack bot that echos messages starting with `this. is.`

![bot in action](https://hc-cdn.hel1.your-objectstorage.com/s/v3/5e686283cf4344aa0bc47189b4ab132633d6a875_image.png)

## Installation

- Create a .env file and copy the contents of .env.example into it
- Use the manifest file from the [slack bolt app tutorial](https://docs.slack.dev/tools/bolt-js/building-an-app#creating-an-app) to create a slack app
- Add the bot account to a channel
- Fill out the .env file with your slack apps info, and the channel that you want your messages echoed
- Run docker compose up
