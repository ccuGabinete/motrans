var axios = require("axios");
var data = {
    "dataSource": "Cluster0",
    "database": "test",
    "collection": "people",
    "document": {
      "name": "John Sample",
      "age": 42
    }
};


var config = {
  method: "post",
  url: "https://data.mongodb-api.com/app/data-ttavf/endpoint/data/beta/action/insertOne",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":
      "g1NUz6raDZRnC9XSGhVcTNaEkJeSYgOnoJhH9h4WSt92PmKMs7RFZjSyAiZdSgwV",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
