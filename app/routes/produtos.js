
module.exports = (app) => {
    
    app.get('/',
        (req, res) => res.send("bagulhos")
    )

    app.get('/produtos',
        (req, res) => {
           
            const connection = app.infra.connectionFactory();
            
            connection.query('select * from livros', (err, results) => {
                res.render("produtos/lista", {lista: results})
                // res.send(livrosJson[0])        
            })

            
            connection.end()

            // res.render("produtos/lista")
        }
    )
}