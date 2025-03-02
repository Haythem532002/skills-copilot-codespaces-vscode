// Create web server
// Create a web server that listens for requests on port 3000. The server should respond with the following:
// A status code of 200
// A Content-Type of text/plain
// The string "Hello, World!"

// Import the http module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Write the response
  res.write('Hello, World!');
  // End the response
  res.end();
});

// Listen for requests on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Run the file with node comments.js and navigate to http://localhost:3000 in your browser. You should see the response Hello, World! on the page.