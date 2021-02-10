const net = require('net');
// establishes connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.setEncoding('utf8');
  // ^ interpret incoming data as text

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  })

  return conn;
};

console.log('Connecting ...');
connect();