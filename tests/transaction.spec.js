const assert = require('assert');
const index = require('../index');
const config = require('../config');
const CoinOne = new index(config.token, config.secret, config.url);

describe('Transaction Endpoints', function() {

  it('/history', (done) => {
    CoinOne.history().then((r) => {
      console.log(r);
    })
  })
})
