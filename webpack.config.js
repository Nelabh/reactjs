var path = require("path");
var DIST_DIR = path.resolve(__dirname,"dist");
var SRC_DIR = path.resolve(__dirname,"src");
// entry: SRC_DIR + "/app/index.js",
//Only for routes The changes are made
var config = {
	entry: SRC_DIR + "/app/index2.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [
			{
				test:/\.js?/,
				include:SRC_DIR,
				loader:"babel-loader",
				query:{
					presets:["react","es2015","stage-2"]
				}

			}
		]
	}
};
module.exports = config;