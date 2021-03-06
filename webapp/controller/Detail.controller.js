sap.ui.define([
    "sapui5/demo/mvcapp/controller/BaseController",
    "sapui5/demo/mvcapp/extlibs/log4javascript"
], function (BaseController,log4javascriptjs) {
    "use strict";
    return BaseController.extend("sapui5.demo.mvcapp.controller.Detail", {
        /* ======================================================= */
        /* lifecycle methods */
        /* ======================================================= */
        /**
         * Called when the worklist controller is instantiated.
         * @public
         */
        onInit: function () {
            this.getRouter().getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },
        /* ======================================================= */
        /* event handlers */
        /* ======================================================= */
        /**
         * Navigates back to the Master
         * @function
         */
        onNavPress: function () {
            var log = log4javascript.getLogger();
            log.debug("onNavPress");

            this.myNavBack("master");
        },
        /* ======================================================= */
        /* formatters */
        /* ======================================================= */
        /**
         * Formats a given string to uppercase.
         *
         * @function
         * @param {string} sName string to be formatted
         * @public
         */
        toUpperCase: function (sName) {
            return sName && sName.toUpperCase();
        },

        /**
         * Binds the view to the object path.

         *
         * @function
         * @param {sap.ui.base.Event} oEvent pattern match event
         * in route 'object'
         * @private
         */
        _onObjectMatched: function (oEvent) {
            var sObjectPath = "/Suppliers/" + oEvent.getParameter("arguments").ID;
            this._bindView(sObjectPath);
        },
        /**
         * Binds the view to the object path.
         *
         * @function
         * @param {string} sObjectPath path to the object to be bound
         * @private
         */
        _bindView: function (sObjectPath) {
            var oView = this.getView();
            oView.bindElement(sObjectPath);
        }
    });
});


