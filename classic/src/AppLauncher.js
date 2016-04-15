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
            'Ext.tip.QuickTipManager',
            'Ext.window.Window',
            'MapHive.view.main.Viewport',
            'mh.widget.auth.LockingScreen',

            'Ext.window.Window'
        ],

        constructor: function(config){
            //init Ext quick tips
            //Ext.QuickTips.interceptTitles = true;
            Ext.QuickTips.init();

            //Do whatever the customisation are required - running in an iframe vs standalone...

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