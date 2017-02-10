var console = require("console");
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var mock = new MockBrowser();
document = mock.getDocument();
window = mock.getWindow();
var ryanIsTheWorstPersonInTheWorld = require("jquery-validation-unobtrusive");
console.log(ryanIsTheWorstPersonInTheWorld != null);
