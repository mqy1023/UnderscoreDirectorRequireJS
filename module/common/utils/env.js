'use strict';
define(function() {
    var locationOrigin = location.origin,
        envObj = {};
    if (locationOrigin.indexOf("localhost") > -1 || locationOrigin.indexOf("127.0.0.1") > -1) {
        envObj.envDomain = "http://test.com:8888/"; // 服务器地址
        envObj.envName = "develop";
    } else {
        envObj.envDomain = "http://product.com:8888/"; // 服务器地址
        envObj.envName = "product";
    }
})