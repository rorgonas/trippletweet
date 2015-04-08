require.config({
    baseUrl: '/',
    paths: {
        jquery:                'libs/jquery/dist/jquery',
        underscore:            'libs/underscore/underscore',
        backbone:              'libs/backbone/backbone',
        handlebars:            'libs/handlebars/handlebars',
        
        // Helpers
        text:                  'libs/requirejs-text/text',
        
        // Sortable
        sortable:              'libs/Sortable/Sortable',
        
        // Mock service 
        mockjax:               'libs/jquery-mockjax/jquery.mockjax',
        mockservice:           'mock/appMockService',

        // Modules
        app:                   'app',
        tweetItemView:         'app/tweets/views/itemView',
        tweetListView:         'app/tweets/views/listView',
        
        searchCollectionView:  'app/search/views/collectionView',

        editLayoutView:        'app/settings/views/editLayoutView',

        headerView:            'app/header/views/headerView'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'/*, 'mockservice'*/],
            exports: 'Backbone'
        },
        jquery: {
            exports: '$'
        },
        mockjax: {
            deps: ['jquery'],
            exports: 'mockjax'
        },
        mockservice: {
            deps: ['jquery', 'mockjax'],
            exports: 'mockservice'
        }
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