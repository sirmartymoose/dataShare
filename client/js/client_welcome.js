if (Meteor.isClient) {
  
    Template.welcome.rendered = function () {
        
        cLog("client_welcome.js", "Template.welcome.rendered")
      
        // Db Data from server 
        
        // End

        $(document).ready(function(){
            
              cLog("client_welcome.js", "Document Ready Fired")

              
            testObj = {
                test:  function(){
                    alert("HI")
                }, 
                create: {
                    person: function(){
                        alert("CREATERPERSON")
                    }
                }
                
                
            }
              
              

         })
    }
}