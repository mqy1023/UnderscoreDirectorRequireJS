
'use strict';
define(['director', 'underscore', 'commUtils/routeHandler'], function (DRouter, _, routeHandler) {

    require.config({
        paths: {
            zeroRouter: 'module/zero/router',
            zeroTpl: 'module/zero/tpl',
            zeroView: 'module/zero/view',
        },
    });

    //先设置一个路由信息表，可以由html直出，纯字符串配置
    var routes = {
        'zero1': 'view/zero1View.js'
    };

    for (var key in routes) {
        routes[key] = routeHandler(routes[key]);
    }

    return DRouter(routes);
});
