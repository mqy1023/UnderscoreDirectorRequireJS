'use strict';

define(function () {

    var currentController = null;

    //用于把字符串转化为一个函数，而这个也是路由的处理核心
    var routeHandler = function (config) {

        return function () {

            appView.setHeader();

            var url = config;
            var params = arguments;

            require([url], function (controller) {
                if(currentController && currentController !== controller){
                    currentController.onRouteChange && currentController.onRouteChange();
                }
                currentController = controller;

                var paramsObj = params[0] ? { pass: params[0]} : {};

                appView.setBody(controller, paramsObj);

                controller.init();
            });
        }
    };

    return routeHandler;

});