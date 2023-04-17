const express = require("express");
const app = express();
const port = 3000;
const { torrentData, getProviders } = require("./api.js");

//middlewares
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const telegramFile = require("./telegram.js");
telegramFile;

app.get("/", async (req, res) => {
	// const data = getProviders();
	res.send("working");
	// console.log(await data);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
