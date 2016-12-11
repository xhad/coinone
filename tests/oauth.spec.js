const assert = require('assert');
const index = require('../index');
const config = require('../config');
const CoinOne = new index(config.token, config.secret, config.url);

describe('Oauth Endpoints', function() {
  it('/delete_token', function(done) {
    CoinOne.deleteToken().then((r) => {
      console.log(r);
      done();
    })
  })

  it('/access_token', function(done) {
    CoinOne.accessToken().then((r) => {
      console.log(r);
      done();
    })
  })
})
