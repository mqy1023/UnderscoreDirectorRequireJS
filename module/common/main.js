'use strict';

(function (win) {

    require.config({
        baseUrl: "/UnderscoreDirectorRequireJS",           //依赖相对路径
        paths: {                    //如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
            director: 'assets/libs/director',
            jquery: 'assets/libs/jquery.min',
            underscore: 'assets/libs/underscore',
            text: 'assets/libs/text',             //用于requirejs导入html类型的依赖

            commTpl: 'module/common/tpl',
            commView: 'module/common/view',

            commUtils: 'module/common/utils'
        },
        map: { // 用于依赖加载css样式文件
            '*': {
                css: 'assets/libs/css'
            }
        },
        shim: {                     //引入没有使用requirejs模块写法的类库。
            underscore: {
                exports: '_'
            },
            jquery: {
                exports: '$'
            },
            director: {
                exports: 'Router'
            }
        }
    });

    require(['jquery', 'underscore', 'commView/appView'], function($, _, appView){
        win.appView = appView;      //用于各个模块控制视图变化
        win.$ = $;                          //暴露必要的全局变量，没必要拘泥于requirejs的强制模块化
        win._ = _;

        // 渲染框架空视图
        appView.render();

        var locationHref = location.href;
        var openModule = "mall";

        if (locationHref.indexOf("module") > -1) {
            openModule = locationHref.substring(locationHref.indexOf("module"), locationHref.indexOf("/index.html")).split("/").pop();
        }

        require(['module/' + openModule + "/router/index"], function(router){

            router.init();              //开始监控url变化
        });
    });


})(window);