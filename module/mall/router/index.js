
'use strict';
define(['director', 'underscore', 'commUtils/routeHandler'], function (DRouter, _, routeHandler) {

    require.config({
        paths: {
            mallRouter: 'module/mall/router',
            mallTpl: 'module/mall/tpl',
            mallView: 'module/mall/view',
        },
    });

    //先设置一个路由信息表，可以由html直出，纯字符串配置
    var routes = {
        'mall1': 'view/mall1View.js',
        // 'mall2': 'view/mall2View.js',
        'mall3': 'view/mall3View.js',
        'mall2/?([^\/]*)/?([^\/]*)': 'view/mall2View.js',   //可缺省参数的写法，其实就是正则表达式,括号内部分会被抽取出来变成参数值
        // 'mall2/:name': 'view/mall2View.js', //director内置了普通必选参数的写法，这种路由，必须用路径“#module2/kenko”才能匹配，无法缺省
    };

    for (var key in routes) {
        routes[key] = routeHandler(routes[key]);
    }

    return DRouter(routes);
});
