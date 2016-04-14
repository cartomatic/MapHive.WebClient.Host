//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Controls the initial application setup and behavior; interacts with the Auth controller in order to authenticate a user;
     * responsible for starting up the application whenever user is authenticated
     */
    Ext.define('MapHive.controller.Root', {

        extend: 'Ext.app.Controller',

        init: function(){
            //<debug>
            console.warn("[ROOT CTRL initialised]");
            //</debug>

            //setup the required evt listeners

        },

        onLaunch: function(){
            //<debug>
            console.warn("[ROOT CTRL launched]");
            //</debug>

            //do whatever needs to be done...

            //and when ready request the user auth!

        }
    });

}());