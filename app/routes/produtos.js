module.exports = (app) => {
    var livrosJson = ([
        {
        
            "id": 1,
            "nome": "casa do codigo"
        },
        {
            "id": 2,
            "nome": "alura"
        },
        {
            "id": 3,
            "nome": "nodejs"
        }
    ])
    app.get('/',
        (req, res) => res.send("bagulhos")
    )

    app.get('/produtos',
        (req, res) => {
            const mysql = require('mysql')
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'renan',
                password: 'renan',
                database: 'banco_nodejs',
                insecureAuth: 'FALSE'
            })
            connection.query('select * from livros', (err, results) => {
                res.render("produtos/lista", {lista: livrosJson})
                // res.send(livrosJson[0])        
            })

            
            connection.end()

            // res.render("produtos/lista")
        }
    )
}