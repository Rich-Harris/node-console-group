require( '../' ).install();

console.group( 'test' );
	console.log( 'indented' );

	console.log( 'another indented line' );

	console.group( 'test' );
		console.log( 'double indented' );
	console.groupEnd();
console.groupEnd();