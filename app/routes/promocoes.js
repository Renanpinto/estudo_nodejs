module.exports = (app) => {
  
  app.get('/promocoes/form', (req, res) => {
    const connection = app.infra.connectionFactory();
    const produtosBanco = new app.infra.ProdutosDAO(connection);
    produtosBanco.lista((err, results) => {
      res.format({
        html: () => {
          res.render('promocoes/form', { lista: results });
        },
      });
    });
  });

  app.post('/promocoes', (req, res) => {
    const connection = app.infra.connectionFactory();
    const produtosBanco = new app.infra.ProdutosDAO(connection);

    const promocao = req.body;
    res.redirect('promocoes/form');

  });
};
