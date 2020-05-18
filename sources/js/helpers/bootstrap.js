$(function() {
    "use strict";

    var bootstrapHelpers = function() {

        function init() {
            bindEventHandlers();
        }

        function bindEventHandlers() {
            $('[data-toggle="tooltip"]').tooltip();
        }

        init();
    };

    new bootstrapHelpers();
});