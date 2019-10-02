const webpack = require('webpack');
const path = require('path');
module.exports = ({mode, presets} = {mode: 'none', presets: []}) => {
	console.log(mode);

	return {
		entry: './src/index.ts',
		mode: mode || presets,
		module: {
			rules: [
				{
					test: /\.ts?$/,
					use: ['ts-loader'],
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},

		plugins: [new webpack.ProgressPlugin()],
	};
};
