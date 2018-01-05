
'use strict';
define(['text!zeroTpl/zero1Tpl.html'], function (tpl) {

    var zero1View = {
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
            $("#toMallModule").click(function (e) {
                location.href = location.protocol + "//" + location.host + "/UnderscoreDirectorRequireJS/module/mall/index.html#mall1";
            })
        },
        initDatas: function () {
            
        }

    };

    return zero1View;
});