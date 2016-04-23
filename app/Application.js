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

        // //global shared controllers - they fire up automatically
        controllers: [
            //use the customised Root
            'MapHive.controller.Root',

            //use the default auth
            'mh.controller.Auth'
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
            //obtain apps from self, but make it through an evt, as some other comps may have already poked the Root for apps
            var tunnel = this.getTunnelId();
            this.watchGlobal('root::appsretrieved', this.loadHostedApp, this, {single: true, tunnel: tunnel});
            this.fireGlobal('root::getapps', null, {tunnel: tunnel});
        },

        /**
         * Responsible for loading a hosted application; listens to tunnelled root::appsretrieved
         * @param apps
         */
        loadHostedApp: function(apps){

            //the thing here is to load an appropriate application:
            //* app can be specified by a shortname or id in the hash - app::shortname or uuid; in this case it is necessary to
            //look the app up
            //* if an app is not specified via hash one of the apps may have a 'isDefault' flag - in such need to pick the first one
            //* if there are no apps with the default flag, then need to pick the first one

            var rawHash = window.location.hash.substring(1),
                hashparts = rawHash.split('|'),
                h = 0, hlen = hashparts.length,
                hash,
                appNameOrId,
                app, a = 0, alen = apps.length,
                appToLoad;

            //extract the app identifier off the hash
            for(h; h < hlen; h++){
                hash = hashparts[h];
                if(hash.indexOf('app::') === 0){
                    appNameOrId = hash.replace('app::', '');
                    break;
                }
            }

            //search for app by its shortname or uuid
            if(appNameOrId){
                for(a; a < alen; a++){
                    app = apps[a];
                    if(app.get('shortName') === appNameOrId || app.get('id') === appNameOrId){

                        //create a clone! do not want to modify the original data!
                        appToLoad = Ext.create(Ext.getClassName(app), app.getData());

                        //since the app has been extracted from hash, it is necessary to pass the hash to the app when loading it
                        //an app will then communicate the hash through postMsg, so it will be possible to update it url bar over here too

                        //grab an url without the hash part (if any)
                        var url = appToLoad.get('url').split('#')[0],
                            customHash =  rawHash.replace('app::' + appNameOrId, '');

                        //make sure hash does not start with a pipe; it would mean it's an empty route
                        if(customHash.indexOf('|') === 0){
                            customHash = customHash.substring(1);
                        }

                        alert(customHash);

                        //set the url with the hash extracted from the address bar
                        appToLoad.set(
                            'url',
                            url + '#' + customHash
                        );

                        break;
                    }
                }
            }

            //get a default app
            if(!appToLoad){
                a = 0;
                for(a; a < alen; a++){
                    app = apps[a];
                    if(app.get('isDefault') === true){
                        appToLoad = app;
                        break;
                    }
                }
            }

            //if failed to find the app to load, just pick the first one
            if(!appToLoad){
                appToLoad = apps[0];
            }

            this.fireGlobal('root::reloadapp', appToLoad);
        }
    });
}());
