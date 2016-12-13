const crypto = require('crypto');
const errorCodes = require('./error-codes');
const request = require('request');

class _Request {
  constructor(access_token, secret_key) {
    this.url = 'https://api.coinone.co.kr';
    this.token = access_token;
    this.secret = secret_key;
  }

  // method to get requests
  get(path) {
    let options = {
      url: this.url + path,
      method: 'get',
    }

    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) reject(error);
        if (response && response.statusCode == 404) {
          reject('Perhaps an error with method or path?')
        } else {
          if (body) resolve(JSON.parse(body));
        }
      })
    }).catch((error) => {
      return error;
    })
  }

  // method to post requests
  post(path, params) {
    return new Promise((resolve, reject) => {
      let payload = {
        nonce: Date.now(),
        access_token: this.token
      }

      let buildRequest = function(options) {
        request.post(options, (error, response, body) => {
          if (response && response.statusCode !== 404) {
            let data = JSON.parse(body);
            if (data.result == 'success') {
              resolve(data);
            } else if (data && data.errorCode != '0') {
              data.reason = errorCodes[data.errorCode];
              reject(data)
            } else {
              reject(data);
            }
          } else {
            reject('Perhaps an error with method or path?')
          }
        })
      }

      let buildOptions = function(payload, headers) {
        let options = {
          url: this.url + path,
          headers: headers,
          body: payload
        }
        buildRequest(options);
      }.bind(this);

      let buildHeaders = function(payload, signature) {
        let headers = {
          'content-type': 'application/json',
          // 'accept': 'application/json',
          'X-COINONE-PAYLOAD': payload,
          'X-COINONE-SIGNATURE': signature
        }

        buildOptions(payload, headers);
      }

      let buildSignature = function(payload) {
        let signature = crypto
          .createHmac('sha512', this.secret.toUpperCase())
          .update(payload)
          .digest('hex');
        buildHeaders(payload, signature);
      }.bind(this);

      let payloadBuffer = function(payload) {
        let makePayload = new Buffer(JSON.stringify(payload))
          .toString('base64');

        buildSignature(makePayload);
      }

      let buildPayload = function(payload) {
        if (params) {
          Object.keys(params).map(function(e) {
            payload[e] = params[e];
          })
        }

        payloadBuffer(payload);
      }

      // starts here and goes up ^^
      buildPayload(payload);
    }).catch((error) => {
      return error;
    })
  }
}

module.exports = _Request
