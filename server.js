//Live Link
// https://script.google.com/macros/s/AKfycby73Lae66krqRJ8FM-J6kw8bt86ewyZqRnxRZUAyuvBrzCwu0y4/exec
//https://script.google.com/macros/s/AKfycbwwsMBQwupw1WeuNuGgeXPOjXbwg93FuTH-MXXCOb27k_atp0nr/exec?operation=auth

//This function when invoked, responds Returns with value of the request key, in the requested format
//Comman UseCase >> Authenticate (createNewuser)/ Authrise (for creating child Api)/create (userCreateReq of own data) / Read [data /attributes ]/ update(userCreateReq of own data) / Delete

/**
 * Reverts with a response based on the request parameter
 */

function doGet(){

 var appData = {
 "heading": "Yo World!",
 "body": "You are not Welcome to the web app."
 };

 var JSONString = JSON.stringify(appData);
 var JSONOutput = ContentService.createTextOutput(JSONString);
 JSONOutput.setMimeType(ContentService.MimeType.JSON);
 return JSONOutput
}


/**
 * Get the URL for the Google Apps Script running as a WebApp.
 */
function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}
