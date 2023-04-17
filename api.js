const torrentSearch = require("torrent-search-api");

// Configure torrent search API
torrentSearch.enableProvider("ThePirateBay");
torrentSearch.enableProvider("1337x");

const torrentData = async (searchTerm) => {
	const torrents = await torrentSearch.search(searchTerm, "All", 20);
	// if (torrents.length === 0) {
	// 	console.log("No torrents found for the search term.");
	// } else {
	// 	// Send a list of the first 10 torrents found
	// 	const torrentList = torrents
	// 		.slice(0, 10)
	// 		.map((torrent, index) => {
	// 			return `🚀${index + 1}. \n🚀${torrent.title} \n🚀 Size - ${
	// 				torrent.size
	// 			}  \n🚀${torrent.magnet}`;
	// 		})
	// 		.join("\n");

	// }
	return await torrents;
};

const getProviders = async () => {
	const providers = await torrentSearch.getProviders();
	const providersList = await providers.map((provider, index) => {
		// `Name - ${provider} and Index - ${index}`;
		"working";
	});
	return await providersList;
};

module.exports = { torrentData, getProviders };
