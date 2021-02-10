const { connect } = require('./client');
console.log('Connecting ...');
connect();

const handleUserInput = function(input) {
  if(input === '\u0003') {
    console.log('Exiting game ... ')
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput)
  stdin.resume();
  return stdin;
};
setupInput();
