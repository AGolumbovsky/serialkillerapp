/* const SerialPort = require('serialport');

console.log("start of program")

const portName = 'COM2'
console.log(portName);

var myPort = new SerialPort(portName, 9600);

myPort.on('open', (myPort) => {
    console.log("something is open")
});

myPort.write("I have no idea wha't going on...")

// list serial ports:
SerialPort.list(function (err, ports) {
 ports.forEach(function(port) {
   console.log("the port com name is", port.comName);
 });
});

console.log("end of program") */



const SerialPort = require('serialport');

const port = new SerialPort('COM3', (err) => {
	
	if(err) console.log("Error:", err.message);
	
});

// console.log("the port is:", port);

port.on('open', () => {
	console.log("port is open for business");
});

port.write("hoopla", (err) => {
	
	if(err) console.log("Error while writing:", err.message);
	console.log("message written successfully");
});

	
	
	
	
	
	
	
	
	
	