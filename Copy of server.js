//Live Link
// https://script.google.com/macros/s/AKfycby73Lae66krqRJ8FM-J6kw8bt86ewyZqRnxRZUAyuvBrzCwu0y4/exec
//https://script.google.com/macros/s/AKfycby73Lae66krqRJ8FM-J6kw8bt86ewyZqRnxRZUAyuvBrzCwu0y4/exec
//This function when invoked, responds Returns with value of the request key, in the requested format
//Comman UseCase >> Authenticate (createNewuser)/ Authrise (for creating child Api)/create (userCreateReq of own data) / Read [data /attributes ]/ update(userCreateReq of own data) / Delete


//function doGet(){
//
// var appData = {
// "heading": "Yo World!",
// "body": "You are not Welcome to the web app."
// };
//
// var JSONString = JSON.stringify(appData);
// var JSONOutput = ContentService.createTextOutput(JSONString);
// JSONOutput.setMimeType(ContentService.MimeType.JSON);
// return JSONOutput
//}

//
//function doGet(){
//
// var HTMLString = "<style> h1,p {font-family: 'Helvitica', 'Arial'}</style>"
// + "<h1>Hello World!</h1>"
// + "<p>Welcome to the Web App";
//
// HTMLOutput = HtmlService.createHtmlOutput(HTMLString);
// return HTMLOutput
//}


function doGet(e){

  // use an externally hosted stylesheet
 var style = '<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">';

 // get the query "greeting" parameter and set the default to "Hello"
 var greeting = e.parameter.greeting || "Hello";
 // get the query "name" parameter and set the default to "World!"
 var name = e.parameter.name || "World";

 // create and use a template
 var heading = HtmlService.createTemplate('<h1><?= greeting ?> <?= name ?>!</h1>')

 // set the template variables
 heading.greeting = greeting;
 heading.name = name;

 var content = "<p>Welcome to the web app.</p>";

 var HTMLOutput = HtmlService.createHtmlOutput();
 HTMLOutput.append(style);
 HTMLOutput.append(heading.evaluate().getContent());
 HTMLOutput.append(content);

 return HTMLOutput
}