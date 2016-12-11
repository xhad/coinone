const assert = require('assert');
const index = require('../index');
const config = require('../config');
const CoinOne = new index(config.token, config.secret, config.url);

describe('Order Endpoints', function() {

  it('/cancel_all', (done) => {
    CoinOne.cancelAll().then((r) => {
      assert.equal(r.result, 'success');
      done();
    })
  })
  it('/cancel', (done) => {
    CoinOne.cancel().then((r) => {
      assert(r.errorCode, '101')
      done();
    })
  })
  it('/limit_buy', (done) => {
    CoinOne.limitBuy({}).then((r) => {
      assert.equal(r.errorCode, '101');
      done()
    })
  })
  it('/limit_sell', (done) => {
    CoinOne.limitSell({}).then((r) => {
      assert.equal(r.errorCode, '101');
      done()
    })
  })
  it('/market_buy', (done) => {
    CoinOne.marketBuy({}).then((r) => {
      assert.equal(r.errorCode, '101');
      done()
    })
  })
  it('/market_sell', (done) => {
    CoinOne.marketSell({}).then((r) => {
      assert.equal(r.errorCode, '101');
      done()
    })
  })
  it('/filledOrders', (done) => {
    CoinOne.filledOrders({}).then((r) => {
      assert.equal(r.result, 'success');
      done()
    })
  })
  it('/unfilledOrders', (done) => {
    CoinOne.unfilledOrders({}).then((r) => {
      assert.equal(r.result, 'success');
      done()
    })
  })
})
