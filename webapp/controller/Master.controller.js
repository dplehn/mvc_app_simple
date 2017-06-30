/**
 * Created by dplehn on 12.06.17.
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sapui5/demo/mvcapp/extlibs/moment",
    "sapui5/demo/mvcapp/extlibs/log4javascript"
], function (Controller,momentjs,log4javascriptjs) {
    "use strict";
    return Controller.extend("sapui5.demo.mvcapp.controller.Master",
        {

            onInit: function() {
                console.log("init master controller");
                var day = moment().add(18,'days');
                console.log(day);

                // Create the logger
                var log = log4javascript.getLogger();

                // Create a PopUpAppender with default options
                var popUpAppender = new log4javascript.PopUpAppender();

                // Change the desired configuration options
                popUpAppender.setFocusPopUp(true);
                popUpAppender.setNewestMessageAtTop(true);

                // Add the appender to the logger
                log.addAppender(popUpAppender);

                // Test the logger
                log.debug("Hello world!");

            },

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