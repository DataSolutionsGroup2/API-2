import sequelize from './config/database';
import routes from './routes/spatialRefSysRoute';

var express = require('express')
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/', routes);

const port = process.env.EXPRESS_PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    app.listen(port, () => {
      console.log(`Servidor Express rodando na porta ${port}`);
    });
  })
  .catch(error => {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  });


  type typeCarro= {
    marca: string,
    nome: string
  }

  function addCarro(marca: string,nome: string){
    let carroArray:typeCarro[] = []
    carroArray.push({marca,nome})

  }