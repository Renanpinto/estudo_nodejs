const http = require('http');

const configuracoes = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },

};

const client = http.request(configuracoes, (res) => {
  console.log(res.statusCode);
  res.on('data', (body) => {
    console.log(`Corpo:${body}`);
  });
});

const produto = {
  titulo: '',
  descricao: '',
  // preco: 20
};

client.end(JSON.stringify(produto));
