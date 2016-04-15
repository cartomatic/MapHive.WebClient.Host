//Disable some of the JSLint warnings
/*global Ext,console,MapHive,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('MapHive.view.main.Viewport', {
        extend: 'Ext.panel.Panel',

        plugins: 'viewport',

        requires: [
            'Ext.button.Button',
            'Ext.layout.container.Fit',
            'Ext.plugin.Viewport',
            'Ext.toolbar.Fill',
            'Ext.toolbar.Toolbar',
            'MapHive.view.main.ViewportController'
        ],

        xtype: 'main-view',

        controller: 'main-view',

        layout: 'fit',

            dockedItems: [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        scale: 'medium',
                        ui: 'black-button',
                        iconCls: 'x-fa fa-th-large',
                        listeners: {
                            click: 'onBtnClick'
                        }
                    },
                    '->',
                    {
                        xtype: 'button',
                        text: 'some other btn'
                    }
                ]
            }
        ]
    });

}());