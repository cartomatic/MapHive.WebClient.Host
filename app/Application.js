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
        extend: 'mh.Application',

        requires: [
            'MapHive.AppLauncher'
        ],

        name: 'MapHive',

        

        //custom launcher class. this is where most app customisations take place
        appLauncher: 'MapHive.AppLauncher'
    });
}());
