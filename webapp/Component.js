/**
 * Created by entw_dplehn on 16.06.2017.
 */
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sapui5.demo.mvcapp.Component", {
        metadata: {
            "rootView": "sapui5.demo.mvcapp.view.App",
            "config": {
                "serviceUrl" : "webapp/service/data.json"
            },
            "routing": {
                "config": {
                    "routerClass": "sap.m.routing.Router",
                    "viewType": "XML",
                    "viewPath": "sapui5.demo.mvcapp.view",
                    "controlId": "app",
                    "controlAggregation": "pages",
                    "transition": "slide"
                },
                "routes": [{
                    "pattern": "",
                    "name": "master",
                    "target": "master"
                }, {
                    "pattern": "detail/{ID}",
                    "name": "detail",
                    "target": "detail"
                }],
                "targets": {
                    "master": {
                        "viewName": "Master",
                        "viewLevel": 1
                    },
                    "detail": {
                        "viewName": "Detail",
                        "viewLevel": 2
                    }
                }
            }
        },

        init: function() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            // create the views based on the url/hash
            this.getRouter().initialize();
        },

        createContent: function () {
            var oRootView = UIComponent.prototype.createContent.apply(this, arguments);

            console.log(this.getMetadata().getConfig().serviceUrl);

            var sServiceModule = this.getMetadata().getConfig().serviceUrl;
            var sModulPath = jQuery.sap.getModulePath(sServiceModule,".json");


            var oModel = new JSONModel(sServiceModule);

            //oModel.setData(oData);
            // important to set the model on the component
            this.setModel(oModel);
            // var oRootView = sap.ui.view("appview", {
            //     type: sap.ui.core.mvc.ViewType.XML,
            //     viewName: "sapui5.demo.mvcapp.view.App"
            // });

            return oRootView;
        }
    });
});