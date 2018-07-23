const express = require('../config/express')();
const request = require('supertest')(express);
const DatabaseCleaner = require('database-cleaner');
const databaseCleaner = new DatabaseCleaner('mysql'); //type = 'mongodb|redis|couchdb'




/*set NOVE_ENT=test*/
describe('#ProdutosController', () => {

    beforeEach((done) => {
        databaseCleaner.clean(express.infra.connectionFactory(), ()=>{
            done();
        });
    });

  it('#listagem Json', (done) => {
    request.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });



  it('#cadastro de um produto invalido', (done) => {
      request.post('/produtos')
          .send({titulo:"", descricao: ""})
          .expect(400, done);
  });

  it('cadastro de um produto valido', (done) => {
      request.post('/produtos')
          .send({titulo:"titulo teste", descricao: "descricao teste", preco: 20})
          .expect(302, done);
  });


});
