import buble from 'rollup-plugin-buble';

const pkg = require( './package.json' );

export default {
	entry: 'src/index.js',
	plugins: [ buble() ],
	targets: [
		{ dest: pkg.module, format: 'es' },
		{ dest: pkg.main, format: 'cjs' }
	]
};
