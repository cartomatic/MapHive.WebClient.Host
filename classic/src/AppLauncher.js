//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';
    
    /**
     * Customised app launcher
     */
    Ext.define('MapHive.AppLauncher', {

    requires: [
        'Ext.tip.QuickTipManager',
        'MapHive.view.main.Viewport'

    ],

    constructor: function(config){
            //init Ext quick tips
            //Ext.QuickTips.interceptTitles = true;
            Ext.QuickTips.init();

            //Do whatever the customisation are required - running in an iframe vs standalone...

            //TODO - prepare the host insfrastructure - so can instantiate and communicate with the hosted apps!

            //init the GUI
            Ext.create('MapHive.view.main.Viewport');

            // Ext.create('mh.widget.auth.LockingScreen').show();
            //
            // Ext.create('Ext.window.Window', {
            //     title: 'Window title',
            //     html: 'Am I gonna by styled or what?'
            // }).show();

            
        }
    });
}());