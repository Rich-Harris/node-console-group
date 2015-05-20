var util = require( 'util' );
var originalLog = console.log;
var prefix = '';

function format ( args ) {
	return util.format.apply( null, args ).replace( /^/gm, prefix );
}

function consoleLog () {
	this._stdout.write( format( arguments ) + '\n' );
}

function consoleGroup () {
	prefix += '⎢ ';
	process.stderr.write( '\u001b[1m' + format( arguments ) + '\u001b[22m\n' );
}

function consoleGroupEnd () {
	prefix = prefix.slice( 0, -2 );
	console.log( '⎣' );
}

module.exports = {
	install: function () {
		console.log = consoleLog;
		console.group = consoleGroup;
		console.groupEnd = consoleGroupEnd;
	},

	teardown: function () {
		console.log = originalLog;
		delete console.group;
		delete console.groupEnd;
	}
};
