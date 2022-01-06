var axios = require("axios");

// function pegaEndereco(cep, numero) {
//   var obj = {};
//   var config = {
//     method: "get",
//     url:
//       "http://riogeo.rio.rj.gov.br/enderecamento/getEnderecosPorCep?parametroJson={%22parametro%22:{%22token%22:%2231a80497-8019-4c5e-aecd-1bc585c0ede6%22,%22cep%22:%22" +
//       cep +
//       "%22,%22numeroPorta%22:%22" +
//       numero +
//       "%22}}",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   axios(config)
//     .then(function (response) {
//       const retorno = response.data.riogeo.retorno.codigo;

//       if (retorno === "1") {
//         const endereco = response.data.riogeo.enderecos.endereco;
//         obj["ap"] = endereco.areaPlanejamento.descricao;
//         obj["ra"] = endereco.regiaoAdministrativa.descricao;
//         obj["codBairro"] = endereco.bairro.codigo;
//         obj["bairro"] = endereco.bairro.descricao;
//         obj["codLogradouro"] = endereco.logradouro.codigo;
//         obj["logradouro"] = endereco.logradouro.descricao;
//         obj["latitude"] = endereco.coordenadas.lat;
//         obj["longitude"] = endereco.coordenadas.lng;
//         obj["municipio"] = "Rio de Janeiro";
//         obj["uf"] = "RJ";
//         console.log(obj);

//         return;
//       }

//       var config = {
//         method: "get",
//         url: "https://viacep.com.br/ws/" + cep + "/json/",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       axios(config)
//         .then((response) => {
//           const endereco = response.data;
//           obj["bairro"] = endereco.bairro;
//           obj["logradouro"] = endereco.logradouro;
//           obj["municipio"] = "Rio de Janeiro";
//           obj["uf"] = "RJ";
//           console.log(obj);
//         })
//         .catch((err) => alert("Verifique o CEP digitado"));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// pegaEndereco("212352801", 1245);


async function teste(cep) {
  var config = {
    method: "get",
    url: "https://viacep.com.br/ws/" + cep + "/json/",
    headers: {
      "Content-Type": "application/json",
    },
  };

  var response = await axios(config);

  console.log(response);

}

teste('21235280')