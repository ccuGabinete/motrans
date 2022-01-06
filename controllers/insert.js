const { MongoClient } = require("mongodb");

var sendJsonResponse = function (res, status, content) {
  res.json(content);
};

// Connection URI
const uri =
  "mongodb+srv://motrans:Ni244265@cluster0.jfy8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Create a new MongoClient
const client = new MongoClient(uri);

module.exports.inserir = (req, res) => {
  async function run() {
    try {
      await client.connect();
      const database = client.db("myFirstDatabase");
      const haiku = database.collection("motrans");

      const doc = req.body;
      const result = await haiku.insertOne(doc);
      sendJsonResponse(res, 200, result);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } catch (err) {
      sendJsonResponse(res, 401, err);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
};


module.exports.buscar = (req, res) => {
  async function run() {
    try {
      await client.connect();
      const database = client.db("myFirstDatabase");
      const haiku = database.collection("motrans");

      const doc = req.body;
      console.log(req.body)
      const result = await haiku.findById(req.body.id);
      sendJsonResponse(res, 200, result);

    } catch (err) {
      sendJsonResponse(res, 401, err);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
};
