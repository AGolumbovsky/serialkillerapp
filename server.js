const express		= require('express');
const SerialPort	= require('serialport');

const app = express();

const httpPort = process.env.PORT || 8787;

app.use(express.static(__dirname + '/public'));

const serPort = new SerialPort('COM3', (err) => {
	
	if(err) console.log("Error creating new port:", err.message);
	
	else console.log("Great success!!! Port created");
	
});



var serPorts = ["at first index", "at second index"]; // secretaty Not Sure

serPort.on('open', () => {

	console.log("port is open for business");

});

// start of weird code that may (most likely will) cause problems and shit
// *** *** *** 
// *** *** 
SerialPort.list(function (err, serPorts) {

	if(err) console.log("some shit happened:", err.message);

	console.log("look, i'm logging something inside SerialPort.list()")

	serPorts.forEach(function(port) {

	  console.log("the port com name is", serPort.comName);

	});
});

console.log("middle of the file, checking if I even got to this point");
// *** *** *** 
// *** *** *** ***
// end of weird code that might have(most likely did) caused problems and shit

serPort.write("hoopla", (err) => {
	
	if(err) console.log("Errr, there was error writing:", err.message);

	console.log("message written successfully");
});

app.listen(httpPort, () => {
	console.log("\n web server listening on port", httpPort);
})
