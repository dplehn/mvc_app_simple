/**
 * Created by dplehn on 12.06.17.
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("sapui5.demo.mvcapp.controller.Master",
        {
            init: console.log("init master controller"),
            onListPress: function(oEvent) {
            // also possible:
             //var oRouter = this.getOwnerComponent().getRouterFor(this);
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var oItem = oEvent.getSource();
                oRouter.navTo("detail", {
                    ID: oItem.getBindingContext().getProperty("ID")
                });
            }
        });
});