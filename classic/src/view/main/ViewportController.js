//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){
    //Make sure strict mode is on
    'use strict';

    /**
     * Created by domin on 4/15/2016.
     */
    Ext.define('MapHive.view.main.ViewportController', {

        extend: 'Ext.app.ViewController',
        alias: 'controller.main-view',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.Column',
        'Ext.panel.Panel',
        'Ext.window.Window'
    ],

    /**
         * Called when the view is created
         */
        init: function() {

            this.iframeId = 'someIdentifier';

            this.getView().setHtml('<iframe id="' + this.iframeId + '" src="about:blank" style="width:100%;height:100%;border:none;">');
        },

        onBtnClick: function(btn){

            if(!btn.Menu){
                btn.Menu = Ext.create('Ext.panel.Panel', {
                    floating: true,

                    modal: true,

                    layout: {
                        type: 'column'
                    },
                    bodyPadding: '5 0 0 5', //trbl,
                    maxWidth: 225,

                    listeners: {
                        render: function(panel){
                            panel.getEl().on(
                                'click',
                                function(evt){
                                    evt.stopPropagation();
                                }
                            );
                        }
                    }
                });
            }

            var me = this;

            btn.Menu.add(Ext.create('Ext.button.Button', {
                text: 'some app',
                height: 64,
                columnWidth: 0.33,
                margin: '0 5 5 0', //trbl
                listeners: {
                    click: function(b, evt, eOpts){
                        //evt.stopPropagation();
                        console.warn('WHOAAAA');
                        return;
                        btn.Menu.hide();
                        document.getElementById(me.iframeId).src="https://apps.maphive.local/_hosted";
                    }
                }
            }));

            //Note:
            //if a property is called menu, the n Ext treats it as the menu.Menu and aut hides it...

            btn.Menu.showBy(btn, 'bl', [0, 5]);

            //this hocus pocus is to fade the panel in...
            //btn.Menu.hide();
            btn.Menu.getEl().setOpacity(0);

            btn.Menu.getEl().animate({
                duration: 500,
                to:{
                    opacity: 1
                },
                listeners: {
                    afteranimate: function(){
                        Ext.get(document).on(
                            'click',
                            function(){
                                console.warn('body clicked!')
                                btn.Menu.hide();
                            },
                            this,
                            {single: true}
                        );
                    },
                    scope: this
                }
            });



            // btn.Menu.getEl().fadeIn({
            //     duration: 1500
            // });
            //btn.Menu.show();

            // btn.Menu.animate({
            //     duration: 5000,
            //     from: {
            //         opacity: 0
            //     },
            //     to: {
            //         opacity: 100
            //     }
            // });

            // setTimeout(function(){
            //
            //         btn.Menu.showBy(btn, 'bl', [0, 5]);
            //
            //         //btn.menu.show();
            //     },
            //     250
            // );


        }
    });

}());