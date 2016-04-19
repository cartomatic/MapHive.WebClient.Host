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
            'Ext.layout.container.Column',
            'Ext.panel.Panel',
            'Ext.window.Window'
        ],

        /**
         * Called when the view is created; need to create the iframe to host the configured apps
         */
        init: function() {

            var iframeId = this.getView().getHostedAppsIframeId();

            if(!iframeId){
                throw 'hostedAppsIframeId not specified!';
            }

            this.getView().setHtml('<iframe id="' + iframeId + '" src="about:blank" style="width:100%;height:100%;border:none;">');
        }
    });

}());