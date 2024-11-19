import http from 'http';
import querystring from 'querystring';
import url from 'url';
import huggingFaceClassification from './huggingFaceClassification.js';


// Define the HTTP server
const server = http.createServer();
const hostname = '127.0.0.1';
const port = 3000;

// Listen for requests made to the server
server.on('request', async (req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url);

  // Extract the query parameters
  const { text } = querystring.parse(parsedUrl.query);

  // Set the response headers
  res.setHeader('Content-Type', 'application/json');

  let response;
  if (parsedUrl.pathname === '/classify' && text) {
    const classifier = await huggingFaceClassification();
    response = await classifier(text);
    res.statusCode = 200;
  } else {
    response = { 'error': 'Bad request' }
    res.statusCode = 400;
  }

  // Send the JSON response
  res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
