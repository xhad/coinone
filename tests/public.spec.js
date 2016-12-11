const assert = require('assert');
const index = require('../index');
const config = require('../config');
const CoinOne = new index(config.token, config.secret, config.url);

describe('Public Endpoints', function() {
  it('/currency', function(done) {
    CoinOne.currency().then((r) => {
      assert.equal(r.result, 'success');
      done();
    })
  })

  it('/orderbook', function(done) {
    CoinOne.orderbook().then((r) => {
      done();
    })
  })

  it('/trades', function(done) {
    CoinOne.trades().then((r) => {
      assert.equal(r.result, 'success');
      done();
    })
  })

  it('/ticker', function(done) {
    CoinOne.trades().then((r) => {
      assert.equal(r.result, 'success');
      done();
    })
  })
})
