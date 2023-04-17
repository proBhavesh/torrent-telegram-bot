const express = require("express");
const dotenv = require("dotenv");
const { torrentData, downloadTorrent } = require("./api.js");

//making passwords secure using .env
dotenv.config({ path: "./.env" });

const app = express();
const port = 3000;

//middlewares
app.use(express.json());

const telegramFile = require("./telegram.js");
telegramFile;

app.get("/", async (req, res) => {
	res.send("working");
	// const torrents = await torrentData("the last of us");

	// if (torrents.length === 0) {
	// 	ctx.reply("No torrents found for the search term.");
	// } else {
	// 	const torrentList = torrents.slice(0, 3).map((torrent, index) => {
	// 		return torrent;
	// 	});
	// 	console.log(await torrentList[1]);
	// 	await downloadTorrent(JSON.parse(torrentList[1]));
	// }
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
