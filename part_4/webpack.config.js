module.exports = {
	entry:	'./src/main.coffee',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	module:	{
		loaders: [
			{
				test: /\.coffee$/,
				exclude: /(node_modules)/,
				loader:	'coffee',
			}
		]
	}
};
