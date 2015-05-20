require( '../' ).install();

console.group( 'test' );
	console.log( 'indented' );

	console.log( 'another indented line' );

	console.group( 'test' );
		console.log( 'double indented' );
		console.log({ foo: 'bar', bar: 'baz', baz: 'qux', arr: [ 'a', 'b', 'c', 'd', 'e', 'f' ]})
	console.groupEnd();
console.groupEnd();
