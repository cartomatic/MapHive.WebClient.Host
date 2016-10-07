//Disable some of the JSLint warnings
/*global console, window, splash, Ext*/

(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * The main application class. An instance of this class is created by app.js when it
     * calls Ext.application(). This is the ideal place to handle application launch and
     * initialization details.
     */
    Ext.define('MapHive.Application', {
        extend: 'mh.Application',

        requires: [
            'MapHive.AppLauncher'
        ],

        name: 'MapHive',

        // //global shared controllers - they fire up automatically
        controllers: [
            //use the customised Root
            'MapHive.controller.Root',

            //use the default auth
            'mh.controller.Auth',

            'mh.controller.Splash'
        ],

        //custom launcher class. this is where most app customisations take place
        appLauncher: 'MapHive.AppLauncher',

        onLaunchApp: function(){

            //first make sure the base does what's required!

            //note: need to drilldown 2 levels, as in fact, this will be an instance of the app defined and launched in the app.js!
            //this is needed, as the core funtionality is borrowed from the generic mh.Application
            this.superclass.superclass.onLaunchApp.call(this);


            //the default mh.Application simply hides the splash screen, creates an instance of appLauncher and fires mhapp::loaded when ready
            //so at this stage our host application UI should be fully created


            //Looks like we're ready to go now - host app is loaded,
            //so need to trigger loading of a hosted application.
            this.fireGlobal('root::loadhostedapp');

            //start the external route watcher - this will watch changes advised by a child, and pass own changes to a child
            this.fireGlobal('root::watchexternalroutes', {hosted: true});
        }

    });
}());
