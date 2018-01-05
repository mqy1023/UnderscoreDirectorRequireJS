'use strict';
define(['jQuery', 'commonUtils/env'], function ($, env) {

    var reqUrls = {};
    if (env.envName == "develop") {
        reqUrls = {
            'testUrl1': env.envDomain + 'xxx/yyy1.do',
            'testUrl2': env.envDomain + 'xxx/yyy2.do',
        }
    } else if (env.envName == "product") {
        reqUrls = {
            'testUrl1': 'xxx/yyy1.do',
            'testUrl2': 'xxx/yyy2.do',
        }
    }

    return reqUrls;
})