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
    Logger.log(data[i][0]);
    Logger.log(data[i][1]);
    Logger.log(data[i][2]);
  }
  return data;
}

function writeProductInfo(a) {
    var ss2 = SpreadsheetApp.openById("19foDdaYKAT49WJjBFsLtc-tCkO-wD9snz96Rlw_12bc");
    var sheet2 = ss2.getSheets()[0];
    sheet2.appendRow(a);
  Logger.log(a[1]);
  return true;
}