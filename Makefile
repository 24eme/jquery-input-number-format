all: input-number-format.jquery.min.js

input-number-format.jquery.min.js: input-number-format.jquery.js
	yui-compressor input-number-format.jquery.js > input-number-format.jquery.min.js
