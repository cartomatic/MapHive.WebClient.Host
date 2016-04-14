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

        mixins: [
            'mh.msgBus.Global'
        ],

        requires: [
            'MapHive.view.main.Viewport'
        ],

        /**
         * @event root::authenticateuser
         */

        init: function(){
            //<debug>
            console.warn("[ROOT CTRL initialised]");
            //</debug>

            //setup the required evt listeners
            this.watchGlobal('auth::userauthenticated', this.onUserAuthenticated, this, {single: true});
        },

        onLaunch: function(){
            //<debug>
            console.warn("[ROOT CTRL launched]");
            //</debug>

            //do whatever needs to be done...

            //and when ready request the user auth!
            this.fireGlobal('root::authenticateuser');
        },

        /**
         * 'auth::userauthenticated' evt listener
         * @param authData
         */
        onUserAuthenticated: function(evtData){
            console.log('User authenticated, can now continue with the app launch!', evtData);

            //Note:
            //Both toolkits need a main view. So this is crucial each toolkit has the same entry point!
            //in this case though, the GUI creation is delegated to toolkit specific code, not directly created here

            Ext.create('MapHive.AppLauncher');
        }
    });

}());