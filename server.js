// git test test test

const SerialPort = require('serialport');


const port = new SerialPort('COM3', (err) => {
	
	if(err) console.log("Error creating new port:", err.message);
	
});

var ports = ["at first index"]; // secretaty not sure

// console.log("the port is:", port);

port.on('open', () => {
	console.log("port is open for business");
});

// start of weird code that may (most likely will) cause problems and shit
// *** *** *** 
// *** *** 
SerialPort.list(function (err, ports) {

	console.log("look, i'm logging something inside SerialPort.list()")

	ports.forEach(function(port) {
	  console.log("the port com name is", port.comName);
	});
});

// *** *** *** 
// *** *** *** ***
// end of weird code that might have(most likely did) caused problems and shit

port.write("hoopla", (err) => {
	
	if(err) console.log("Errr, there was error:", err.message);
	console.log("message written successfully");
});