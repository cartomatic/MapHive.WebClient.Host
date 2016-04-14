//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Responsible for handling the uer athentication related functionality. The UI is toolkit specific
     */
    Ext.define('MapHive.controller.Auth', {
        extend: 'Ext.app.Controller',

        init: function(){
            //<debug>
            console.warn("[AUTH CTRL initialised]");
            //</debug>

            //setup the required evt listeners


        },

        onLaunch: function(){
            //<debug>
            console.warn("[AUTH CTRL launched]");
            //</debug>

            //so far nothing to do here
        }
    });

}());