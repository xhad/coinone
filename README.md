## Coinone.com Node.js API V2 Wrapper

Please see documentation at:

http://doc.coinone.co.kr

## As Node module

```js
const coinOne = require('coinone');
const ACCESS_TOKEN = 'get-from-coinone.co.kr';
const SECRET_KEY = 'get-from-coinone.co.kr';

const CoinOne = new coinOne(ACCESS_TOKEN, SECRET_KEY);

CoinOne.userInfo().then((r) => {
    console.log(r);
});

```

## From Source

Create 'config.js' file with your token and secret.

```js
module.exports = {
  'token': 'get token at coinone.com',
  'secret': 'get token at coinone.com'
}
```

Example usage:

```js
const index = require('./index');
const config = require('./config');

const CoinOne = new index(config.token, config.secret);

CoinOne.userInfo().then((r) => {
    console.log(r);
});

```


https://github.com/xhad/coinone
