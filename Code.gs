var sheet = SpreadsheetApp.openById(SHEET_ID);
    
function doGet(e){
  
  var Email_Addresses_sheet = sheet.getSheetByName("Email Addresses");
  var list = Email_Addresses_sheet.getRange(1, 1, Email_Addresses_sheet.getRange("A2").getDataRegion().getLastRow(), 1).getValues();
  
  var temp = HtmlService.createTemplateFromFile("WebPage");
  temp.title = "template_title";
  temp.list = list.map(function(r){return r[0]; });
  return temp.evaluate();
  
}

function userClickedBtn(fName, lName, dDown){
  
  var WebApp_ButtonClick_Sheet = sheet.getSheetByName("WebApp_ButtonClick");
  var lastRow = WebApp_ButtonClick_Sheet.getLastRow();
  WebApp_ButtonClick_Sheet.getRange((lastRow+1), 1).setValue(fName);
  WebApp_ButtonClick_Sheet.getRange((lastRow+1), 2).setValue(lName);
  WebApp_ButtonClick_Sheet.getRange((lastRow+1), 3).setValue(dDown);
  
}

function include(filename){
  
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  
}

function getLoc(zipCode){
  
  var Estimates_Sheet = sheet.getSheetByName("Estimates");
  var data = Estimates_Sheet.getRange(1, 1, Estimates_Sheet.getLastRow(), 2).getValues();
  
  var zipCodesList = data.map(function(r){ return r[0]; });
  var locationList = data.map(function(r){ return r[1]; });
  
  var position = zipCodesList.indexOf(zipCode);
  if(position > -1){
    return locationList[position];
  }else{
    return "No location listed";
  }
  
}
