
'use strict';
define(['text!commTpl/headerTpl.html'], function (tpl) {

    var headerView = {

        render: _.template(tpl),
        contoller: "",
        init: function(ctl) {
            var self = this;
            self.contoller = ctl;

            self.initEvents();
            self.initDatas();
        },

        initEvents: function () {

        },
        initDatas: function () {

        }

    };

    return headerView;
});