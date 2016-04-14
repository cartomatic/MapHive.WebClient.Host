//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Created by domin on 4/14/2016.
     */
    Ext.define('MapHive.AppLauncher', {

        requires: [
            'MapHive.view.main.Viewport'
        ],

        constructor: function(config){
            //init Ext quick tips
            //Ext.QuickTips.interceptTitles = true;
            Ext.QuickTips.init();

            //Do whatever the customisation are required - running in an iframe vs standalone...

            //init the GUI
            Ext.create('MapHive.view.main.Viewport');
        }
    });
}());