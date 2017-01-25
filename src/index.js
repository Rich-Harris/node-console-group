import * as util from 'util';

const originalLog = console.log;
const originalWarn = console.warn;
const originalError = console.error;

let prefix = '';

function format ( args ) {
	return util.format( ...args ).replace( /^/gm, prefix );
}

function consoleLog () {
	this._stdout.write( format( arguments ) + '\n' );
}

function consoleError () {
	this._stderr.write( format( arguments ) + '\n' );
}

function consoleGroup () {
	prefix += '⎢ ';
	this._stdout.write( '\u001b[1m' + format( arguments ) + '\u001b[22m\n' );
}

function consoleGroupEnd () {
	prefix = prefix.slice( 0, -2 );
}

export function install () {
	console.log = consoleLog;
	console.warn = console.error = consoleError;
	console.group = consoleGroup;
	console.groupEnd = consoleGroupEnd;
}

export function teardown () {
	console.log = originalLog;
	console.warn = originalWarn;
	console.error = originalError;
	delete console.group;
	delete console.groupEnd;
}
