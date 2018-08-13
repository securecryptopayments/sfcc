'use strict'

/* API Includes */
var Logger = require('dw/system/Logger');
var app = require('app_storefornt_controllers/cartridge/scripts/app');
var guard = require('app_storefornt_controllers/cartridge/scripts/guard');

/**
 * @description returns iframe html where user will be able to proceed with crypto payments
 * @returns {String}
 */
function getIframe() {
    app.getView({
        URL: getUrl(),
        IframeParameters: getIframeParameters()
    }).render('scpiframe');
}


exports.GetSCPIframe = guard.ensure(['post', 'https'], getIframe);