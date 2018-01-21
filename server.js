const express = require('express');

const SerialPort = require('serialport');

console.log("start of program")

console.log(portName);
var myPort = new SerialPort(portName, 9600);

// list serial ports:
SerialPort.list(function (err, ports) {
 ports.forEach(function(port) {
   console.log(port.comName);
 });
});
setTimeout(function() {
    console.log("timing out for one second")
}, 1000);

console.log("end of program")