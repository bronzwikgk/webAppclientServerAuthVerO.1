
/**
 * Server.gs is a server side function that handles new user registration. It should handle all the feature releated with User LifeCycle, including payment and issues Quota Token
 * This script when published has to be executed as the publisher a supplementary client side project handles all the client and his data Query.
 * //Comman UseCase >> Authenticate (createNewuser) / Authrize (for creating child Api)/create (userCreateReq of own data) / Read [data /attributes ]/ update(userCreateReq of own data) / Delete
 * Live Link
 * https://script.google.com/a/0dot1.live/macros/s/AKfycbwoCxEu1kqQ2VqG5ybZXqDOhjobcswGaGQXHZazTA/exec
 * https://script.google.com/macros/s/AKfycbwwsMBQwupw1WeuNuGgeXPOjXbwg93FuTH-MXXCOb27k_atp0nr/exec?operation=auth
 * To be implemented
 * https://developers.google.com/identity/sign-in/web
 * https://github.com/gsuitedevs/apps-script-oauth2/tree/master/samples/NoLibrary
 */ 






/**
 * Reverts with a response based on the request parameter.
 */
function doGet(request) {
  return HtmlService.createTemplateFromFile('login')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


/**
 * Get the URL for the Google Apps Script running as a WebApp.
 */
function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}
