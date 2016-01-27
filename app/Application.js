//Disable some of the JSLint warnings
/*global console, splash, Ext*/

(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * The main application class. An instance of this class is created by app.js when it
     * calls Ext.application(). This is the ideal place to handle application launch and
     * initialization details.
     */
    Ext.define('MapHive.Application', {
        extend: 'Ext.app.Application',

        name: 'MapHive',

        //global shared controllers - they fire up automatically
        controllers: [
        ],

        //global / shared stores
        stores: [
        ],

        //app's default route. if no alternative route is provided
        //this becomes the active route upon start
        defaultToken : 'dashboard',

        init: function(){
            //some IE8 specific stuff for debugging...
            if(Ext.browser.is.IE8){
                console = {
                    warn: Ext.emptyFn,
                    log: Ext.emptyFn,
                    error: Ext.emptyFn
                };
            }
        },

        launch: function () {
            //init Ext quick tips
            //Ext.QuickTips.interceptTitles = true;
            Ext.QuickTips.init();

            //hide the splash screen
            splash.hide();

            //<debug>
            console.warn('[APP] launch');
            //</debug>
        },

        onAppUpdate: function () {
            Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
                function (choice) {
                    if (choice === 'yes') {
                        window.location.reload();
                    }
                }
            );
        }
    });
}());
