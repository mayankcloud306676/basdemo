sap.ui.define([
        "sap/ui/core/UIComponent",
            "mayank/ui5/project1/model/models"
            ], (UIComponent, models) => {
                "use strict";

                    return UIComponent.extend("mayank.ui5.project1.Component", {
                            metadata: {
                                        manifest: "json",
                                                    interfaces: [
                                                                    "sap.ui.core.IAsyncContentCreation"
                                                                                ]
                                                                                        },

                                                                                                init() {
                                                                                                            // call the base component's init function
                                                                                                                        UIComponent.prototype.init.apply(this, arguments);

                                                                                                                                    // set the device model
                                                                                                                                                this.setModel(models.createDeviceModel(), "device");

                                                                                                                                                               var oModel = new sap.ui.model.json.JSONModel();
                                                                                                                                                               var sPath = sap.ui.require.toUrl("mayank/ui5/project1/model/data.json");
                                                                                                                                                           //  oModel.loadData("mayank/ui5/project1/model/data.json");
                                                                                                                                                           oModel.loadData(sPath);
                                                                                                                                                                     this.setModel(oModel, "globalData");

                                                                                                                                                                                 // enable routing
                                                                                                                                                                                             this.getRouter().initialize();
                                                                                                                                                                                                     }
                                                                                                                                                                                                         });
                                                                                                                                                                                                         });
