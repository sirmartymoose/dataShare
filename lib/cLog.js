

if (Meteor.isServer) {

    Meteor.methods({
        
        createLog: function(page, message){
            var logTime = new Date()
            var logUser = this.userId
            var logPage = page
            var logMessage = message
            logs.insert({'logTime': logTime, 'logUser':logUser, 'logPage': logPage, 'logMessage': logMessage})
            
            
        }, 
    
  
    })


}

if (Meteor.isClient) {
    
    cLog = function(page, message){
        if(cLogging == true){
            console.log("Page: " + page + " Message: " + message)
            
        } if (saveLogging == true){
            Meteor.call('createLog', page, message, function(req,res){
            
                console.log('success')
            })
            
            
        }
        
    }
    

}