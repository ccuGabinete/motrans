const { MongoClient } = require("mongodb");

var sendJsonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
}

// Connection URI
const uri =
  "mongodb+srv://motrans:Ni244265@cluster0.jfy8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

module.exports.buscar = (req, res) => {
  async function run() {
    try {
      await client.connect();
      const database = client.db("test");
      const movies = database.collection("people");
      // Query for a movie that has the title 'The Room'
      const query = { name: "John Sample" };
      const options = {};
      const movie = await movies.findOne(query, options);
      // since this method returns the matched document, not a cursor, print it directly
      sendJsonResponse(res, 200, movie)
      console.log(movie);
    }
      catch(err){
        sendJsonResponse(res, 401, err)
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
};
