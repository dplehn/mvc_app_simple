/**
 * Created by entw_dplehn on 14.06.2017.
 */
sap.ui.jsview("sapui5.demo.mvcapp.view.Detail", {
    getControllerName: function() {
        return "sapui5.demo.mvcapp.controller.Detail";
    },

    createContent: function(oController) {
        var oObjectHeader = new sap.m.ObjectHeader({
            title: "{Name}",
            number: "ID: {ID}",
            attributes: [
                new sap.m.ObjectAttribute({
                    text: "{Address/Country}"
                })
            ]
        });

        /* Seite erzeugen */
        var oPageDetail = new sap.m.Page({
            title: "Supplier Detail",
            showNavButton: true,
            navButtonPress: [oController.onNavPress, oController],
            /*
            ** Elemente auf der Seite plazieren
             */
            content: [oObjectHeader]
        });
        return oPageDetail;
    }
});