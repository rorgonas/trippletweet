require.config({
    baseUrl: 'libs/',
    paths: {
        jquery: 'jquery/dist/jquery',
        underscore: 'underscore/underscore',
        backbone: 'backbone/backbone',
        handlebars: 'handlebars/handlebars',
        text: 'requirejs-text/text'

        app: '../app'
    },
    shim: {
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },

        jquery: {
            exports: "$"
        }
    }
});

require(['jquery', 'backbone', 'app'], 
    function($, Backbone, App){
        new App;
});