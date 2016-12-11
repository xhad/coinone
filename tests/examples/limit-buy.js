var config = require('../../config');
var crypto = require('crypto');
var request = require('request');
var ACCESS_TOKEN = config.token;
var SECRET_KEY = config.secret;
var url = 'https://api.coinone.co.kr/v2/order/limit_buy/';
  var payload = {
  "access_token": ACCESS_TOKEN,
  "price": 500000,
  "qty": 0.09,
  "nonce": Date.now()
};

payload = new Buffer(JSON.stringify(payload)).toString('base64');

var signature = crypto
  .createHmac("sha512", SECRET_KEY.toUpperCase())
  .update(payload)
  .digest('hex');

var headers = {
  'content-type':'application/json',
  'X-COINONE-PAYLOAD': payload,
  'X-COINONE-SIGNATURE': signature
};

var options = {
  url: url,
  headers: headers,
  body: payload
};

request.post(options,
  function(error, response, body) {
    console.log(body);
});
