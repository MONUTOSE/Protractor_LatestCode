var XLSX = require('xlsx');
 
const readExcel = function(FilePath , SheetName){

    var inboundWorkbook = new Excel.workbook();
    inboundWorkbook = XLSX.readFile(FilePath).then(function(){
    var inboundWorksheet = inboundWorkbook.getWorksheet(SheetName);
    browser.waitForAngularEnabled(false);
    return inboundWorksheet;
    })
};
 
const convertExcel_ToJSON = function(FilePath, SheetName)
{
    var workbook=XLSX.readFile(FilePath);
    var worksheet = workbook.Sheets[SheetName];
    return XLSX.utils.sheet_to_json(worksheet);
};
module.exports.convertExcel_ToJSON = convertExcel_ToJSON;
module.exports.readExcel = readExcel;

  