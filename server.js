try {
  process.loadEnvFile();
} catch (error) {
  console.log("there is no .env file, using default env variables");
}

const jsonServer = require(`json-server`);
const server = jsonServer.create(); //cretat the server object

//Configurations of the server, in jsonServer the defaults
const middleware = jsonServer.defaults(); // set all th main configurations a server shoudl have

server.use(middleware);

const router = jsonServer.router(`db.json`); // this is the file that will be used as a database
server.use(router);

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  console.log(`JSON server is running at port ${PORT}`);
  console.log(`Local Access at http://localhost:${PORT}`);
});
