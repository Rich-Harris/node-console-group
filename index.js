var originalLog = console.log;
var prefix = '';

function consoleLog () {
	var result;

	if ( typeof arguments[0] === 'string' ) {
		arguments[0] = prefix + arguments[0];
		result = originalLog.apply( console, arguments );
	} else {
		var args = [ prefix ];
		var i;

		for ( i = 0; i < arguments.length; i += 1 ) {
			args.push( arguments[i] );
		}

		result = originalLog.apply( console, args );
	}

	return result;
}

function consoleGroup () {
	originalLog.call( console, prefix );
	process.stderr.write( '\u001b[1m' );
	console.log.apply( console, arguments );
	process.stderr.write( '\u001b[22m' );

	console.log( '⎡' );

	prefix += '⎢ ';
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