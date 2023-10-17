/**
 *@NApiVersion 2.x
 *@NScriptType ClientScript
 */

 define(['N/currentRecord'],
      function(currentRecord){
      function fieldChanged(context) {

    var currentRecord = context.currentRecord;

    var FieldName = context.fieldId;
     

        if (FieldName === 'entity')

            currentRecord.setValue({

            fieldId: 'memo',
            value: currentRecord.getText({
            fieldId: 'entity'})

               })

       }
        return{
        fieldChanged: fieldChanged
         };  

 });