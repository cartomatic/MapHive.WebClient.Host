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
        'Ext.form.field.Display',
        'Ext.layout.container.Column',
        'Ext.panel.Panel',
        'Ext.window.Window'
    ],

    mixins: [
            'mh.communication.MsgBus'
        ],

        /**
         * Called when the view is created; need to create the iframe to host the configured apps
         */
        init: function() {

            var iframeId = 'hosted-apps-iframe';

            this.getView().add(
                [
                    {
                        xtype: 'panel',
                        items: [
                            { xtype: 'btn-postchild-test' },
                            { xtype: 'btn-postchilddrilldown-test' }
                        ]
                    },
                    {
                        xtype: 'displayfield',
                        value: '<br/><div id="msgbus_xwindowtest_feedback" style="height: 20px;"></div><br/>'
                    },
                    {
                        flex: 1,
                        xtype: 'container',
                        reference: 'appContainer',
                        html: '<iframe id="' + iframeId + '" src="about:blank" style="width:100%;height:100%;border:none;">'
                    }
                ]
            );

            //iframe has been set up, so just notify whoever cares about it - app reloader module in thi case
            this.fireGlobal('root::setuphostiframe', iframeId);


            //since this view is a host for the iframed apps, some of them may require own splashscreen, for others customised load mask can be provided
            this.watchGlobal('root::appreloadstart', this.onAppReloadStart, this);
            this.watchGlobal('mhapp::loaded', this.onAppLoaded, this);

            //TODO - load the configured app! - gimmeapps or something
            //TODO - go through the load app event, so all still evt based!

            // Ext.create('mh.widget.auth.LockingScreen').show();
            //
            // Ext.create('Ext.window.Window', {
            //     title: 'Window title',
            //     html: 'Am I gonna by styled or what?'
            // }).show();



            //this is the xWindow messaging demo functionality
            this.watchGlobal('msgbus::xwindowtest', function(eData){

                var el = Ext.get('msgbus_xwindowtest_feedback');
                el.setHtml('[msgbus::xwindowtest] evt received from: ' + eData.origin);
                el.animate({
                    to: {
                        duration: 250,
                        backgroundColor: '#FECC00'
                    },
                    listeners: {
                        afteranimate: function(){
                            setTimeout(
                                function(){
                                    el.animate({
                                        duration: 250,
                                        backgroundColor: '#FFFFFF'
                                    });
                                },
                                1000
                            );
                        }
                    }
                });
            });
        },

        onAppReloadStart: function(app){
            //use own load mask if the app specifically does not require using own splashscreen
            if(!app.get('useSplashscreen')){
                this.lookupReference('appContainer').mask('Application is loading...');
            }
        },

        onAppLoaded: function(){
            this.lookupReference('appContainer').unmask();
        }
    });

}());