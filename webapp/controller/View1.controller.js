sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "mayank/ui5/project1/formatter/formatter"
], (Controller,myFormatter) => {
    "use strict";

    return Controller.extend("mayank.ui5.project1.controller.View1", {
        oFormatter : myFormatter,
        onInit() {
      
        

    //         var myJson = {

    //             "empid" : 2,
    //             "empname" : 'Mayank',
    //             "show" : true


    //         }

    //         var cities = {

    //            "city" : [

    //              { "name" : 'Delhi'},
    //              {"name" : 'Dehradun'},
    //              {"name" : 'Diu'}


    //            ]
    //         }

          

    //    var oModel = new sap.ui.model.json.JSONModel();
    //    var oModel1 = new sap.ui.model.json.JSONModel();
    //    var oModel2 = new sap.ui.model.json.JSONModel();
    //    oModel1.setData(myJson);
    //  oModel2.setData(cities);
    //    this.getView().setModel(oModel);
    //    this.getView().setModel(oModel1,"abc");
    //        this.getView().setModel(oModel2,"def");

    //    var oPage = this.getView().byId("page");
    //    oPage.bindElement("/");

    //    var a = this.getView().byId("id4");
    //    a.bindValue("abc>/show");
    // // //    a.setValue("mayank");
    // // // a.bindProperty("value","/empname")
    // // a.bindValue("/empid");


        },

        myPress : function()
        {
            
            alert("you press the button");
        },

        myListPress : function(oEvent)
        {
        
          var oItem = oEvent.getParameter("listItem");
  var sPath = oItem.getBindingContextPath(); // should be /details/0 or /details/1

       var oRouter = this.getOwnerComponent().getRouter();
       var num = parseInt(sPath.split("/")[2]);
oRouter.navTo("RouteView2", {
  inp: num
});
        },

        goToView2 : function(oEvent)


        {
         var oRouter = this.getOwnerComponent().getRouter();
oRouter.navTo("RouteView2", {
  inp: "Warsaw"
});
        },

        getCity : function(oEvent)
        {
         var a = oEvent.getParameter("selectedItem");
         var inp = a.getTitle();
         this.getView().byId("empInput").setValue(inp);

        },

       aDialog:null,

        onValueHelpRequest : function(oEvent)
        {
          
               if(!this.aDialog)
               {

                this.aDialog =  new sap.ui.xmlfragment("mayank.ui5.project1.fragments.abc2",this);
                       this.getView().addDependent(this.aDialog);
                this.aDialog.bindAggregation("items",{
                     path : "def>/city",
                     template : new sap.m.StandardListItem("lid44",{
                          title : "{def>name}"

                     })


                })
               }
   
               this.aDialog.open();
        },

        onSearch : function(oEvent)

        
        {
          debugger;
             var oType = oEvent.getParameter("query");
             var oFilter = new sap.ui.model.Filter("empname",sap.ui.model.FilterOperator.Contains,oType);
            var aFilter = [oFilter ];
           
         
             this.getView().byId("lid").getBinding("items").filter(aFilter);
           
             
              
        },

        onDelete : function(oEvent)
        {
             var oList = this.getView().byId("lid");
             var oList1 = oEvent.getSource();
             debugger;
        },

        oControl : function(inp)
        {

          if ( inp  >= 80 )
          return 'A';
          else if ( inp < 80 & (inp) >= 60 )
          return 'B';
          else
            return 'C';
    
        }
    });
});