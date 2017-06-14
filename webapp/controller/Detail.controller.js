/**
 * Created by entw_dplehn on 14.06.2017.
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";
    return Controller.extend("sapui5.demo.mvcapp.controller.Detail",
        {
            onNavPress: function() {
                oApp.back();
            }
        });
});