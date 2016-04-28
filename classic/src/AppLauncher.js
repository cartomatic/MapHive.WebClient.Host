//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Customised app launcher; this is the real entry point for the app UI creation.
     */
    Ext.define('MapHive.AppLauncher', {

    requires: [
        'Ext.tip.QuickTipManager',
        'MapHive.view.main.Viewport',
        'mh.module.appBar.AppBar'
    ],

    constructor: function(config){
            //init Ext quick tips
            //Ext.QuickTips.interceptTitles = true;
            Ext.QuickTips.init();

            //disable aria warnings
            Ext.ariaWarn = Ext.emptyFn;


            //init the GUI
            Ext.create('MapHive.view.main.Viewport', {
                dockedItems: [
                    //use the default app toolbar
                    {
                        xtype: 'mh-app-bar'
                    }
                ]
            });
        }
    });
}());