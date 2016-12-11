// Chad Lynch - Seoul, South Korea

const _Request = require('./lib/_request');

class CoinOne {
  constructor(token, secret) {
    this._request = new _Request(token, secret);
    this.v = '/v2';
  }

  // PUBLIC Endpoints
  currency() {
    return this._request.get('/currency');
  }

  orderbook() {
    return this._request.get('/orderbook');
  }

  trades() {
    return this._request.get('/trades');
  }

  ticker() {
    return this._request.get('/ticker');
  }

  //>> ACCOUNT Endpoints
  userInfo() {
    return this._request
      .post(this.v + '/account/' + 'user_info');
  }

  balance() {
    return this._request
      .post(this.v + '/account/' + 'balance');
  }

  depositAddress() {
    return this._request
      .post(this.v + '/account/' + 'btc_deposit_address');
  }

  dailyBalance() {
    return this._request
      .post(this.v + '/account/' + 'daily_balance');
  }

  virtualAccount() {
    return this._request
      .post(this.v + '/account/' + 'virtual_account');
  }

  //>> ORDER Endpoints
  cancelAll() {
    return this._request
      .post(this.v + '/order/' + 'cancel_all', null);
  }

  cancel(params) {
    return this._request
      .post(this.v + '/order/' + 'cancel', null);
  }

  limitBuy(params) {
    return this._request
      .post(this.v + '/order/' + 'limit_buy', params);
  }

  limitSell(params) {
    return this._request
      .post(this.v + '/order/' + 'limit_sell', params);
  }

  marketBuy(params) {
    return this._request
      .post(this.v + '/order/' + 'market_buy', params);
  }

  marketSell(params) {
    return this._request
      .post(this.v + '/order/' + 'market_sell', params);
  }

  filledOrders() {
    return this._request
      .post(this.v + '/order/' + 'complete_orders');
  }

  unfilledOrders() {
    return this._request
      .post(this.v + '/order/' + 'limit_orders');
  }

  //>> TRANSACTION Endpoints
  auth(type) {
    let params = {'type': 'btc or krw'}
    return this._request
      .post(this.v + '/transaction/' + 'auth_number', params);
  }

  history(symbol) {
    let path = this.v + '/transaction/' + symbol + '/history';
    return this._request
      .post(path);
  }

  send(params) {
    return this._request
      .post(this.v + '/transaction/', params);
  }

  //>> OAUTH Endpoints
  deleteToken() {
    return this._request
      .post(this.v + '/oauth/' + 'delete_token');
  }

  accessToken() {
    return this._request
      .post(this.v + '/oauth/' + 'access_token');
  }

  refreshToken() {
    return this._request
      .post(this.v + '/oauth/' + 'refresh_token');
  }
}

module.exports = CoinOne;
