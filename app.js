const { PORT = 3000 } = process.env;
const express = require('express');
const app = express();

app.listen(PORT, () => {
  process.stdout.write('Server is running at: ');
  console.log('\x1b[36m%s\x1b[0m', `http://localhost:${PORT}`);
});

/**
 * As a second option one can use the following simple setup (version #2, without using express library)
 */
// const http = require("http");
// const { PORT = 3000 } = process.env;
// const HOST = '127.0.0.1';
// const server = http.createServer().listen(PORT, HOST, () => {
//   console.log(`Server is up and running at ${HOST}:${PORT}`);
// });
