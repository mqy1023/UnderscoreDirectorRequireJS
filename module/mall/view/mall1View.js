
'use strict';
define(['text!mallTpl/mall1Tpl.html'], function (tpl) {

    var mall1View = {
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
            
        },
        initDatas: function () {
            
        }

    };

    return mall1View;
});