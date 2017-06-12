/**
 * Created by entw_dplehn on 12.06.2017.
 */

sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Master";
    },
    createContent: function (oController) {

        var oData = {
            "CountSuppliers": "2",
            "Suppliers": [
                {
                    "ID": 0,
                    "Name": "Exotic Liquids",
                    "Address": {
                        "Street": "NE 228th",
                        "City": "Sammamish",
                        "State": "WA",
                        "ZipCode": "98074",
                        "Country": "USA"
                    }
                },
                {
                    "ID": 1,
                    "Name": "Tokyo Traders",
                    "Address": {
                        "Street": "NE 40th",
                        "City": "Redmond",
                        "State": "WA",
                        "ZipCode": "98052",
                        "Country": "USA"
                    }
                }
            ]
        };

        // model creation and setting data
        var oModel = sap.ui.model.json.JSONModel();
        oModel.setData(oData);

        sap.ui.getCore().setModel(oModel);


        var aColumns = [
            new sap.m.Column({
                header: new sap.m.Text({
                    text: "ID"
                })
            }),
            new sap.m.Column({
                header: new sap.m.Text({
                    text: "Name"
                })
            })
        ];

        // in the template we'll display the supplier information
        var oTemplate = new sap.m.ColumnListItem({
            type: "Navigation",
            cells: [
                new sap.m.ObjectIdentifier({
                    text: "{ID}"
                }),
                new sap.m.ObjectIdentifier({
                    text: "{Name}"
                })
            ]
        });

        // in the header we're displaying the number of suppliers
        var oTableHeader = new sap.m.Toolbar({
            content: [
                new sap.m.Title({
                    text: "Number of Suppliers: {/CountSuppliers}"
                })
            ]
        });

        // we create the table with the columns and header
        var oTable = new sap.m.Table({
            columns: aColumns,
            headerToolbar: oTableHeader
        });

        // we bind the table items to the /Suppliers entries
        // and to our template
        oTable.bindItems("/Suppliers", oTemplate);


        var oPageMaster;

        oPageMaster = new sap.m.Page({
            title: "Supplier Overview",
            content: [oTable]
        });

        return oPageMaster;


     /*   var oApp = new sap.m.App("myApp");
        oApp.addPage(oPageMaster);
        oApp.placeAt("content");*/

    }


});