const assert = require('assert');
const index = require('../index');
const config = require('../config');
const CoinOne = new index(config.token, config.secret, config.url);

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
