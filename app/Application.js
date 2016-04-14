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

        requires: [
            'mh.util.console.Logger'
        ],

        name: 'MapHive',

        //global shared controllers - they fire up automatically
        controllers: [
            'MapHive.controller.Root',
            'MapHive.controller.Auth'
        ],

        //global / shared stores
        stores: [
        ],

        //app's default route. if no alternative route is provided
        //this becomes the active route upon start
        defaultToken : 'dashboard',

        init: function(){

            //<debug>
            console.warn('[APP] initialised');
            //</debug>

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
            console.warn('[APP] launched');
            //</debug>

            //Note:
            //In the generic code cannot require modules that are toolkit specific!
            //This is important as if some toolkit specific requires make to the generic code,
            //the sencha app will not be able to either refresh or build the application.

            //Note:
            //Two global controllers take over from here: Root & Auth. The main actor is the Root controller - see the code to see
            //how it interacts with the Auth controller.
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
