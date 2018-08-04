
module.exports = (app) => {
  app.get('/',
    (req, res) => res.send('bagulhos'));

  app.get('/produtos', (req, res, next) => {
    const connection = app.infra.connectionFactory();
    const produtosBanco = new app.infra.ProdutosDAO(connection);

    produtosBanco.lista((err, results) => {
      if (err) {
        return next(err);
      }
      res.format({
        html: () => {
          res.render('produtos/lista', { lista: results });
        },
        json: () => {
          res.json(results);
        },
      });
      // res.send(livrosJson[0])
    });
    connection.end();
    // res.render("produtos/lista")
  });

  app.get('/produtos/form',
    (req, res) => res.render('produtos/form', { errosValidacao: {}, produto: {} }));

  app.post('/produtos', (req, res) => {
    const connection = app.infra.connectionFactory();
    const produtosDao = new app.infra.ProdutosDAO(connection);

    const produto = req.body;
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('preco', 'Formato inválido').isFloat();

    const erros = req.validationErrors();
    if (erros) {
      res.format({
        html: () => {
          res.status(400);
          res.render('produtos/form', { errosValidacao: erros, produto });
        },
        json: () => {
          res.status(400);
          res.send(erros);
        },
      });

      return;
    }

    produtosDao.salva(produto, (err, results) => {
      console.log(err);
      res.redirect('/produtos');
    });
    connection.end();
  });
};
