
'use strict';
define(['text!mallTpl/mall2Tpl.html'], function (tpl) {

    var mall2View = {

        render: function(params) {

            var paramsObj = (!params || $.isEmptyObject(params)) ? {pass: "defaultPassValue"} : params;
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

            $("#toMall3Btn").click(function (e) {

                // 不改变地址栏, 修改页面
                require(['mallView/mall3View'], function (mall3View) {

                    appView.setBody(mall3View, { name: "fromMall2Name" });
                    mall3View.init(self); // 传递 view2 控制器到mall3
                })
            })
        },
        initDatas: function () {

        },

        testMall3Func: function () {
            console.log("mall3View 执行 mall2View的方法")
        }

    };

    return mall2View;
});