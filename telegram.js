const { Telegraf } = require("telegraf");
const { createReadStream } = require("fs");
const { torrentData } = require("./api.js");
// Configure torrent search API
// torrentSearch.enableProvider("ThePirateBay");
// torrentSearch.enableProvider("1337x");

// Create a new Telegraf bot with your API token
const bot = new Telegraf(process.env.Telegram_Token);

// Start command
bot.start((ctx) => {
  ctx.reply(
    "Hi! I am a Torrent search bot. Type the name of a movie, TV show or music you want to search for and I will look for the torrents for you."
  );
});

// Torrent search command
bot.command("search", async (ctx) => {
  console.log("Message received - ", ctx.message.text.slice(8));
  const searchTerm = ctx.message.text.slice(8);

  // Search for torrents using the search term
  const torrents = await torrentData(searchTerm);

  if (torrents.length === 0) {
    ctx.reply("No torrents found for the search term.");
  } else {
    // Send a list of the first 10 torrents found
    const torrentList = torrents
      .slice(0, 3)
      .map((torrent, index) => {
        return `🚀${index + 1}. \n🚀${torrent.title} \n🚀 Size - ${
          torrent.size
        }  \n🚀Magent Link - ${torrent.magnet}`;
      })
      .join("\n");

    ctx.replyWithMarkdown(
      `Here are the top ${
        torrents.length > 10 ? 10 : torrents.length
      } torrents I found for "${searchTerm}":\n\n${torrentList}`
    );
  }
});

// Handle any other message
bot.on("message", (ctx) => {
  ctx.reply(`Sorry, I don't understand "${ctx.message.text}".`);
});

// Start the bot
bot.launch();

// const TelegramBot = require("telegram-bot-api");
// const TorrentSearchApi = require("torrent-search-api");

// const token = "6142166548:AAGW2jJz9f3jhDFpMvmCuEC717ChSQubeZo";

// const bot = new TelegramBot(token, { polling: true });

// bot.on("message", async (msg) => {
//   const chatId = msg.chat.id;
//   const query = msg.text;

//   if (query.startsWith("/search")) {
//     const searchTerm = query.slice(7).trim();
//     const torrents = await TorrentSearchApi.search(searchTerm);
//     const torrentList = torrents.map((torrent) => {
//       return `${torrent.title} (${torrent.size}) - ${torrent.magnet}`;
//     });
//     const response = torrentList.join("\n");
//     bot.sendMessage(chatId, response);
//   } else {
//     bot.sendMessage(
//       chatId,
//       "Send me a /search command followed by a search term to find torrents."
//     );
//   }
// });
