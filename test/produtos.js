const http = require('http')
const assert = require('assert')

describe('#ProdutosController', function(done){

    it('#listagem Json', function(){

        const configuracoes = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers:{
                'Accept': 'application/json'
            }

        }

        http.get(configuracoes, (res) =>{
            assert.equal(res.statusCode,200)
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')

            done()
        })
    })
})