'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on ducatuscore-payment-protocol Module: {0}'
};

module.exports = require('ducatuscore-lib').errors.extend(spec);
