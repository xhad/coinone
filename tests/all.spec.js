// I like to use Mocha Testing framework.
// sudo npm i -g mocha
// mocha all.spec.js

const assert = require('assert');
const index = require('../index');
const config = require('../config');
const CoinOne = new index(config.token, config.secret, config.url);

console.log('\tChad Lynch - clynch33@gmail.com')

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

describe('Account Endpoints', function() {
  it('userInfo()', (done)=> {
    CoinOne.userInfo().then((r) => {
      assert.equal(r.result, 'success');
      done();
    })
  })
  it('depositAddress()', (done)=> {
    CoinOne.depositAddress().then((r) => {
      assert.equal(r.result, 'success');
      done()
    })
  })
  it('balance()', (done)=> {
    CoinOne.balance().then((r) => {
      assert.equal(r.result, 'success');
      done();
    })
  })
  it('dailyBalance()', (done)=> {
    CoinOne.dailyBalance().then((r) => {
      assert.equal(r.result, 'success');
      done();
    })
  })
  it('virtualAccount()', (done)=> {
    CoinOne.virtualAccount().then((r) => {
      assert.equal(r.result, 'success');
      done();
    })
  })
})

describe('Order Endpoints', function() {

  it('/cancel_all', (done) => {
    CoinOne.cancelAll().then((r) => {
      assert.equal(r.result, 'success');
	console.log(r);
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
