logs = new Mongo.Collection("logs")
sheetData = new Mongo.Collection("sheetData")
sheetDefinitions = new Mongo.Collection("sheetDefinitions")


if (Meteor.isServer) {
Meteor.publish("logs", function () {
  return logs.find({});
});

Meteor.publish("sheetData", function () {
  return sheetData.find({});
});

Meteor.publish("sheetDefinitions", function () {
  return sheetDefinitions.find({});
});

}

