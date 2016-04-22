//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MapHive.view.main.Viewport', {
        extend: 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.VBox',
        'Ext.plugin.Viewport',
        'MapHive.view.main.ViewportController'
    ],

    plugins: 'viewport',

        border: false,

        ui: 'green-panel',

        title: 'I am a <b>"HOST"</b> app example running @' + ' <b>' + window.location.href + '</b>',

    xtype: 'main-view',

        controller: 'main-view',

        layout: {
            type: 'vbox',
            align: 'stretch'
        }
    });

}());