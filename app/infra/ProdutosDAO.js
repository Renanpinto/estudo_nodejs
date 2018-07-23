class ProdutosDAO {
  constructor(connection) {
    this.connection = connection;
  }

  lista(callback) {
    this.connection.query('select * from livros', callback);
  }

  salva(produto, callback) {
    this.connection.query('insert into livros set ?', produto, callback);
  }
}

module.exports = () => ProdutosDAO;
