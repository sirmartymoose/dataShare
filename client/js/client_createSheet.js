Template.createSheet.helpers({

});


Template.createSheet.onRendered(function () {
    
    

    $(document).ready(function(){
        
        $("#buttonCreateSheet").click(function(){
            var sheetNameVal = $("#formSheetName").val()
            var colData = hotInstance.getData()[0]
            console.log(sheetNameVal)
            Meteor.call('createSheet', sheetNameVal, colData, function(err,res){
                console.log(err); 
                console.log(res); 
            })
            
        })
     
        renderColumnDefinitions = function(){
             $container = $("#columnNamesTable");
             $container.handsontable({

            data: [['a']], 
            minSpareRows: 0,
            minSpareCols: 1, 
            startRows: 1, 
            startCols: 2,
            colHeaders: true
                //colHeaders: ['Time', 'userId', 'page', 'message']
             });
            hotInstance = $("#columnNamesTable").handsontable('getInstance');
        }
        
        renderColumnDefinitions()
     
     
        
    })


});