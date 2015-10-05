if (Meteor.isClient) {
  
    Template.logs.rendered = function () {
      
        // Db Data from server 
            Meteor.subscribe("logs", function(){
                constructHotLog()
            });
            
            cLog("client_logs.js", "Subscribed to Dataset 'logs'")

        
        // End
        
        
      
        cLog("client_logs.js", "Template.logs.rendered")
        
        getLogs = function(){
            cLog("client_logs.js", "getLogs function Called")
            var returnData = logs.find({}, {sort: {'logTime': -1}} ).fetch()
            var outputArray = []
            
            $(returnData).each(function(x,y){
              var iOutputObject = {}
              iOutputObject['logTime'] = y['logTime'].toString(); 
              iOutputObject['logUser'] = y['logUser']; 
              iOutputObject['logPage'] = y['logPage']; 
              iOutputObject['logMessage'] = y['logMessage']; 
              outputArray.push(iOutputObject)
            })
            return outputArray
        }
        
        
        constructHotLog = function(){
             $container = $("#results");
             $container.handsontable({
            data: getLogs(),
                colHeaders: ['Time', 'userId', 'page', 'message']
             });
            hotInstance = $("#results").handsontable('getInstance');
        }
        

            $(document).ready(function(){
                  cLog("client_logs.js", "Document Ready Fired")

             })
    }
}