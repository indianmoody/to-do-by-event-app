function doGet() {
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .getContent();
}

function logProductInfo() {
  //var sheet = SpreadsheetApp.getActiveSheet();
  var ss = SpreadsheetApp.openById("19foDdaYKAT49WJjBFsLtc-tCkO-wD9snz96Rlw_12bc");
  var sheet = ss.getSheets()[0];
  
  var data = sheet.getDataRange().getValues();
  for (var i = 0; i < data.length; i++) {
    Logger.log('Product name: ' + data[i][0]);
    Logger.log('Product number: ' + data[i][1]);
  }
  return data;
}