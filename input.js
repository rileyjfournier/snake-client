let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput)
  stdin.resume();
  return stdin;
};

const handleUserInput = function(input) {
  if(input === '\u0003') {
    console.log('Exiting game ... ');
    process.exit();
  }
  if(input === 'w') {
    connection.write('Move: up');
  }
  if(input === 's') {
    connection.write('Move: down');
  }
  if(input === 'a') {
    connection.write('Move: left');
  }
  if(input === 'd') {
    connection.write('Move: right');
  }
};

module.exports = { setupInput };