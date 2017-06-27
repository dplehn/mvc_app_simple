sap.ui.define(['sap/m/MessageToast', 'sap/ui/core/mvc/Controller'],
    function (MessageToast, Controller) {
        "use strict";

        var PageController = Controller.extend("sapui5.demo.mvcapp.controller.Page", {

            onPress: function (evt) {
                if (evt.getSource().getPressed()) {
                    MessageToast.show(evt.getSource().getId() + " Pressed");
                } else {
                    MessageToast.show(evt.getSource().getId() + " Unpressed");
                }
                ;
            },
            onNav: function (evt) {
                if (evt.getSource().getPressed()) {
                    MessageToast.show(evt.getSource().getId() + " Pressed");
                } else {
                    MessageToast.show(evt.getSource().getId() + " Unpressed");
                }
                ;

                // also possible:
                //var oRouter = this.getOwnerComponent().getRouterFor(this);
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // var oItem = oEvent.getSource();
                oRouter.navTo("master");

            }


        });

        return PageController;

    });
