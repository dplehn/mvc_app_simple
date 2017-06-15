/**
 * Created by dplehn on 12.06.17.
 */
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("sapui5.demo.mvcapp.controller.Master",
        {
            init: alert("xxxxxxxxx"),
            onListPress: function (oEvent) {
                // var sPageId = "detailPage";
                var sPageId = oApp.getPages()[1].getId()
                oApp.to(sPageId);

                /* hier wird der bindingcontext gesetzt */

                var oPage = oApp.getPage(sPageId);
                var oContext = oEvent.getSource().getBindingContext();
                oPage.setBindingContext(oContext);
            }
        });
});