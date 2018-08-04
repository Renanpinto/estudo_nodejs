module.exports = (app) => {
  app.get('/', (req, res) => {
    const connection = app.infra.connectionFactory();
    const produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.lista((err, results) => {
      if (err) {
        return (err);
      }
      res.format({
        html: () => {
          res.render('home/index', { livros: results });
        },
      });
    });
    connection.end();
  });
};
