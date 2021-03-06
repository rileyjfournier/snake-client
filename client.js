const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');               // interpret data in a text format
  conn.on('connect', () => {              // do these things once connected 
    conn.write('Name: RJF');              // send this data to the server
    console.log('Successfully connected to game server')
  })
  conn.on('data', (data) => {
    console.log('Server says: ', data);   // print out the incoming data

  });
  return conn;
};


module.exports = { connect };