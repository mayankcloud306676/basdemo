sap.ui.define(
    
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller){

        return Controller.extend("mayank.ui5.project1.controller.View2",{ 


                 onInit() {


                   var oRouter = this.getOwnerComponent().getRouter();
                   oRouter.attachRoutePatternMatched(this.herculis,this);


                 },

                 herculis : function(oEvent)
                 {
          

                    var val = parseInt(oEvent.getParameters().arguments.inp);
                    var sPath = "/details/" + val;
              //   var sPath = "/details/2";
             
             
                    this.getView().bindElement({
                      path : sPath,
                      model : "globalData"

                    });
                 }



        })





})