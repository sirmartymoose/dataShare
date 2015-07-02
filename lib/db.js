logs = new Mongo.Collection("logs")



if (Meteor.isServer) {
Meteor.publish("logs", function () {
  return logs.find({});
});


}

if (Meteor.isClient) {
    
    


}