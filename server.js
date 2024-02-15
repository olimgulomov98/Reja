const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://olimjongulamov1998:WIyqtoHWXzsPxiXZ@cluster0.nqycvpu.mongodb.net/";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on Connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app); // shu app joylashlash joy singlethread deyiladi, xamma zaproslar shu yerga keladi
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
