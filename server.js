const express		= require('express');
const SerialPort	= require('serialport');

const app = express();

// Serial business
// ***************
const serPort = new SerialPort('COM5', (err) => {
	
	if(err) console.log("Error creating new port:", err.message);
	
	else console.log("Great success!!! Port created");
	
});



var serPorts = ["at first index", "at second index"]; // Secretary Not Sure

serPort.on('open', () => {

	console.log("port is open for business");

});

serPort.on('data', (data) => {

	console.log(data)
})

// start of weird code that may (most likely will) cause problems and shit
// *** *** *** 
// *** *** 
SerialPort.list(function (err, serPorts) {

	if(err) console.log("some shit happened:", err.message);

	else {
		
		
		console.log("listing ports")
		
		serPorts.forEach(function(port) {
			
			console.log("the port com name is", serPort.comName);
			
		});
	}
});

console.log("middle of the file, checking if I even got to this point");

serPort.write("RESTART 0 DEVICE<LF>", (err) => { // string here is from Tesira Forte
	
	if(err) console.log("Errr, there was error writing:", err.message);

	else {

		console.log("message written successfully");
	}
});


// HTTP business
// *************

const httpPort = process.env.PORT || 8787;

app.use(express.static(__dirname + '/public'));

app.get('getAll', (req, res) => {

	console.log("testing sending stuff...");

	res.send("testing app.get in server.js");

})

app.listen(httpPort, () => {

	console.log("\n web server listening on port", httpPort);

})
