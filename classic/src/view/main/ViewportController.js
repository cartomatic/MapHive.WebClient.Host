//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Created by domin on 4/15/2016.
     */
    Ext.define('MapHive.view.main.ViewportController', {

        extend: 'Ext.app.ViewController',
        alias: 'controller.main-view',

    requires: [
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.layout.container.Column',
        'Ext.panel.Panel',
        'Ext.window.Window'
    ],

    mixins: [
            'mh.msgBus.Global'
        ],

        /**
         * Called when the view is created; need to create the iframe to host the configured apps
         */
        init: function() {

            var iframeId = 'hosted-apps-iframe';

            this.getView().add({
                xtype: 'container',
                html: '<iframe id="' + iframeId + '" src="about:blank" style="width:100%;height:100%;border:none;">'
            });

            //iframe has been set up, so just notify whoever cares about it - app reloader module in thi case
            this.fireGlobal('root::setuphostiframe', iframeId);
        }
    });

}());