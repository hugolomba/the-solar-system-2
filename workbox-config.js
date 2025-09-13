module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{png,css,js,ttf,ico,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};