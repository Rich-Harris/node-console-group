# node-console-group

In browsers, `console.group()` is an incredibly useful debugging tool:

```js
function foo (input) {
  console.group('we are debugging', 'foo');
  console.log('input value:');
  console.log(input);
  console.group('nested group');
  console.log('console.groupception')
  console.groupEnd();
  console.groupEnd();

  return input.answer;
}

foo({answer: 42});
```

![console-group-browser](https://cloud.githubusercontent.com/assets/1162160/7666720/72819c7a-fbbd-11e4-928f-a7b65586c077.png)

But it doesn't exist in node.js! It was driving me crazy, so I created this package:

![console-group-terminal](https://cloud.githubusercontent.com/assets/1162160/7666721/7284b91e-fbbd-11e4-82a1-47ba4522a285.png)

It's a 5 minute job - highly unsophisticated, doesn't even have a test suite, so YMMV. I'm not planning to actively maintain it (though I'll certainly take pull requests). Be warned! If that doesn't put you off, read on for usage instructions.

## Installation and usage

Install...

```bash
npm install console-group
```

...and use. This overwrites the `console.log` method, and adds `console.group` and `console.groupEnd`.

```js
require( 'console-group' ).install();

// later, if you want to clean up
require( 'console-group' ).teardown();
```


## License

MIT.
