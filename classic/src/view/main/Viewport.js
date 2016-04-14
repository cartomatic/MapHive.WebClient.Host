//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MapHive.view.main.Viewport', {
        extend: 'Ext.container.Viewport',

        layout: 'fit',

        html: 'This is gonna be the classic app Viewport',
    
        items: [
        ]
    });

}());