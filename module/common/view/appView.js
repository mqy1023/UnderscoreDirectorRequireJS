
'use strict';

define(['text!commTpl/bodyTpl.html'], function(tpl) {

    var appView = {
        render: function () {

            document.body.innerHTML = _.template(tpl, {});
        },
        setHeader: function(headerView) {
            if (headerView) {
                document.getElementById("sectionHeader").innerHTML = headerView.init();
            } else {
                require(['commView/headerView'], function (headerView) {

                    document.getElementById("sectionHeader").innerHTML = headerView.render();
                    // $("#sectionHeader").html(headerView.init());
                    headerView.render();
                })
            }
        },
        setBody: function(appView, opt, renderId) {

            if (!appView) {
                return;
            }

            var opts = opt || {};

            if (renderId) {
                // $("#" + renderId).html(appView.init(opt));
                document.getElementById(renderId).innerHTML = appView.render(opts);
            } else {
                // $("#sectionBody").html(appView.init(opt));
                document.getElementById("sectionBody").innerHTML = appView.render(opts);
            }
        }
    }

    return appView;
})