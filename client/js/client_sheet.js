if (Meteor.isClient) {
  
    Template.sheet.rendered = function () {

            Meteor.subscribe("sheetData", function(){
                renderLeftSheet(getSheetData())
            });

        getSheetData = function(){
            cLog("GetSheetData called")
            var returnData = sheetData.find({sheetId: Router.current().params._id}).fetch()
            return returnData
        }
        
        saveSheetData = function(){
            cLog("SaveSheetData called")
            sData = hotInstance.getData(); 
                $(sData).each(function(x,y){
                    sheetData.upsert({_id: y['_id']}, y)
                })
            
        }
        
        $("#saveSheetDataButton").click(function(){
            saveSheetData()
        })
        
        constructDataSchema = function(){
            outArray = []
            sheetDef = sheetDefinitions.findOne({_id: Router.current().params._id})
            sheetCols = sheetDef['columns']
            
            dSchema = {}
            colSchema = []
            dSchema['sheetId'] = Router.current().params._id
            dSchema['sheetAuthor'] = Meteor.userId()
            
            
            $(sheetCols).each(function(x,y){
                if(y != null){
                    dSchema[y] = null
                    colObj = {}
                    colObj['data'] = y 
                    colSchema.push(colObj)
                }
            })
            
            
            outArray.push(dSchema,colSchema, sheetCols)
            return outArray
        }
        
        
        renderLeftSheet = function(sheetData){
            dSchemaArray = constructDataSchema()
            cLog("RENDERLEFTSHEETCALLED")
             $container = $("#leftTableContent");
             $container.handsontable({
            dataSchema: dSchemaArray[0],
            data: sheetData, 
            minSpareRows: 1, 
            startRows: 2, 
            startCols: 2,
            colHeaders: dSchemaArray[2], 
            columns: dSchemaArray[1]
                //colHeaders: ['Time', 'userId', 'page', 'message']
             });
            hotInstance = $("#leftTableContent").handsontable('getInstance');
        }
        

            $(document).ready(function(){
                  cLog("client_logs.js", "Document Ready Fired")

             })
             
             
    }
    
    
}