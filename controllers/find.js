const mongoose = require("mongoose");

// Connection URI
const uri =
  "mongodb+srv://motrans:Ni244265@cluster0.jfy8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const conn = mongoose.connect(uri);
const DadosSchema = new mongoose.Schema({ any: mongoose.Schema.Types.Mixed });
const Dados = mongoose.model("motrans", DadosSchema);

var sendJsonResponse = function (res, status, content) {
  res.json(content);
};

module.exports.buscar = (req, res) => {
  Dados.findById(req.body.id, (err, response) => {
    err
      ? sendJsonResponse(res, 401, err)
      : sendJsonResponse(res, 200, response);
  });
};

module.exports.alterar = (req, res) => {
  console.log(req.body);

  Dados.findOneAndRemove({ _id: req.body.id }, (err, response) => {
    if (err) {
      sendJsonResponse(res, 401, err);
    } else {
      var dados = new Dados(req.body);
      console.log(dados);
      dados.save((err, response) => {
        err
          ? sendJsonResponse(res, 401, err)
          : sendJsonResponse(res, 200, response);
      });
    }
  });
};

module.exports.remover = (req, res) => {
  console.log(req.body);

  Dados.findOneAndRemove({ _id: req.body.id }, (err, response) => {
    err
      ? sendJsonResponse(res, 401, err)
      : sendJsonResponse(res, 200, response);
  });
};
