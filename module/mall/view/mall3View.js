
'use strict';
define(['text!mallTpl/mall3Tpl.html'], function (tpl) {

    var mall3View = {

        render: function(params) {

            var paramsObj = (!params || $.isEmptyObject(params)) ? {} : params;
            return _.template(tpl, paramsObj);
        },
        contoller: "",
        init: function(ctl) {
            var self = this;
            self.contoller = ctl;

            self.initEvents();
            self.initDatas();
        },

        initEvents: function () {

            var self = this;

            $("#doMall2Btn").click(function (e) {
                self.contoller && self.contoller.testMall3Func();
            });

            $("#toZeroModule").click(function (e) {
                location.href = location.protocol + "//" + location.host + "/UnderscoreDirectorRequireJS/module/zero/index.html#zero1";
            });

        },
        initDatas: function () {

        }

    };

    return mall3View;
});