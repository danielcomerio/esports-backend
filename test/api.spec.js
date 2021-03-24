// Auxiliado por: https://medium.com/@hdeodato/teste-autom%C3%A1tico-de-api-rest-usando-com-node-js-mocha-chai-6aec4613d100
var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "https://esportes-backend.herokuapp.com";

// Criamos nosso primeiro caso de teste e fornecemos uma descricao utilizando describe
describe("Teste API E-Sports", function () {
    // a funcao it eh o que vamos testar realmente, neste caso o endpoint /cards, que deve retornar no maximo 100 cartas
    it("Deve receber os cadastros do E-commerce", function (done) {
        request.get(urlBase + "/cadastros", function (error, response, body) {
            // precisamos converter o retorno para um objeto json
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }

            // utilizando a funcao expect do chai, vamos verificar se o resultado da chamada foi sucesso (200)
            expect(response.statusCode).to.equal(200);
            done(); // avisamos o test runner que acabamos a validacao e ja pode proseeguir
        }
        );
    });

    it("Deve receber os produtos do E-commerce", function (done) {
        request.get(urlBase + "/produtos", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os produtos da categoria equipamento do E-commerce", function (done) {
        request.get(urlBase + "/equipamentos", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os produtos da categoria feminina do E-commerce", function (done) {
        request.get(urlBase + "/feminino", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os produtos da categoria masculina do E-commerce", function (done) {
        request.get(urlBase + "/masculino", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os produtos da categoria infantil do E-commerce", function (done) {
        request.get(urlBase + "/infantil", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os produtos da categoria roupa do E-commerce", function (done) {
        request.get(urlBase + "/roupas", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os produtos da categoria calçado do E-commerce", function (done) {
        request.get(urlBase + "/calcados", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os pedidos pendentes dos fornecedores do E-commerce", function (done) {
        request.get(urlBase + "/pedidosPendentes", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os pedidos em andamento dos fornecedores do E-commerce", function (done) {
        request.get(urlBase + "/pedidosEmAndamento", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os pedidos finalizados dos fornecedores do E-commerce", function (done) {
        request.get(urlBase + "/pedidosFinalizados", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os pedidos dos clientes do E-commerce", function (done) {
        request.get(urlBase + "/pedidosCliente", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

    it("Deve receber os fornecedores do E-commerce", function (done) {
        request.get(urlBase + "/fornecedores", function (error, response, body) {
            var _body = [];
            try {
                _body = JSON.parse(body);
            }
            catch (e) {
                _body = [];
            }
            expect(response.statusCode).to.equal(200);
            done();
        }
        );
    });

});
