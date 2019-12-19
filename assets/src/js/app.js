/**
 * Bootstrap - Starter Kit
 *
 * @author Prismify
 * @version 1.0.4
 */

window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');

// require('more-packages-installed-with-npm-install');

$(function() {
    "use strict";

    // Helpers
    require('./helpers/bootstrap');
    // require('.helpers/more-helpers');

    // Components
    // require('./components/more-components');

    // Modules
    require('../../../../../modules/system/assets/js/framework');
    require('../../../../../modules/system/assets/js/framework.extras');
});