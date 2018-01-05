
'use strict';

define(['commonUtils/url'], function(configUrl) {
    var commonTools = {

        commAjax: function() {
            var args = arguments,
                opts = args[0],
                success = args[1],
                error = args[2];

            var defaultOpts = {
                dataType: (!opts.dataType) ? "json" : opts.dataType,
                type: (!opts.type) ? "GET" : opts.type,
                timeout: (!opts.timeout) ? 100000 : opts.timeout,
                success: function (res) {
                    if (success && typeof success == "function") {
                        success(res)
                    }
                },
                error: function (err) {
                    if (error && typeof error == "function") {
                        error(err)
                    }
                },
            }
            defaultOpts = $.extend({}, defaultOpts, opts);

            if (!defaultOpts.url) {
                return;
            }
            defaultOpts.url = configUrl[defaultOpts.url];

            $.ajax(defaultOpts);
        },

    }

    return commonTools;
});