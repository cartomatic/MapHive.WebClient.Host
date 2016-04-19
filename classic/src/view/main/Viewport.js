//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MapHive.view.main.Viewport', {
        extend: 'Ext.panel.Panel',

        plugins: 'viewport',

        border: false,

        requires: [
            'Ext.layout.container.Fit',
            'Ext.plugin.Viewport',
            'MapHive.view.main.ViewportController'
        ],

        xtype: 'main-view',

        controller: 'main-view',

        config: {
            /**
             * Id of an iframe the application uses to host other apps; this id is used to create an iframe container the configured apps are loaded into.
             */
            hostedAppsIframeId: null
        },

        layout: 'fit'
    });

}());