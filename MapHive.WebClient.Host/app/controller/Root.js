//Disable some of the JSLint warnings
/*global window,console,Ext*/
(function(){

    //Make sure strict mode is on
    'use strict';

    /**
     * Created by domin on 4/22/2016.
     */
    Ext.define('MapHive.controller.Root', {
        extend: 'mh.controller.Root',
    
        /**
         * Called when the view is created
         */
        init: function(){
            //first make sure to init the base stuff!
            this.superclass.init.call(this);
        },

        /**
         * A simple override - host does not use a standard cfg, so needs to suppress the default cfg call
         */
        getUserConfiguration: function(){
            this.fireGlobal('root::launchapp');
        }
    });

}());