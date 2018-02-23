'use-strict';

var config = require('./config.js')();

var src = config.root + config.src;
var build = config.root + config.build;

module.exports = {
	to: {
		src: src,
		build: build,
		assets: {
			in:  src + config.assets,
			out:  build + config.assets
		},
		sass: {
			in:  src + config.sass.dir,
			out: build + config.css
		},
		pug: {
			in:  src + config.pug.dir,
			out: build
		}
	}
};
