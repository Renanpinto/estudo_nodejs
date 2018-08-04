const app = require('./config/express')();

const PORT = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Servidor rodando na porta ${PORT}`));
