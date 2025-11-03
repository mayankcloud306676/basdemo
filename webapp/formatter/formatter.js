sap.ui.define([],function(){

return{

      oControl1 : function(inp)
        {

          if ( inp  >= 80 )
          return 'A';
          else if ( inp < 80 & (inp) >= 60 )
          return 'B';
          else
            return 'C';
    
        }


};


})