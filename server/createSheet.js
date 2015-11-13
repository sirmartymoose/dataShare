Meteor.methods({
  createSheet: function (sheetName, colData) {
      var sheetAuthor = this.userId; 
      sheetDefinitions.insert({sheetName: sheetName, sheetAuthor: sheetAuthor, columns: colData}); 

  }
});