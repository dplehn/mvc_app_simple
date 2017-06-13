/**
 * Created by entw_dplehn on 12.06.2017.
 */

sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
    getControllerName: function () {
        return "sapui5.demo.mvcapp.controller.Master";
    },
    createContent: function (oController) {



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



    }


});