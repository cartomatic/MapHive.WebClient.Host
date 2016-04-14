//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MapHive.view.main.Viewport', {

        extend: 'Ext.Container',

        fullscreen: 'true',

        layout: 'card',

        html: 'This is gonna be the modern app Viewport; initially only a "sorry, no mobile version yet" informative screen',
    
        items: [
        ]
    });

}());