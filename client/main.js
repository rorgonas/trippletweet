require.config({
    baseUrl: 'libs/',
    paths: {
        jquery:                'jquery/dist/jquery',
        underscore:            'underscore/underscore',
        backbone:              'backbone/backbone',
        handlebars:            'handlebars/handlebars',
        text:                  'requirejs-text/text',
        sortable:              'Sortable/Sortable',
        // jquerysortable:              'Sortable/jquery.binding',

        app:                   '../app',
        tweetItemView:         '../app/tweets/views/itemView',
        tweetListView:         '../app/tweets/views/listView',
        tweetContainerView:    '../app/tweets/views/containerView'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        jquery: {
            exports: '$'
        }
        // },
        // jquerysortable: {
        //     deps: ['jquery', 'sortable'],
        //     exports: 'Sortable'
        // }
    }
});

require([
    'jquery', 
    'backbone', 
    'app'
], function($, Backbone, App){
        
        // Bootstrap app
        var app = new App();

        Backbone.history.start();
});