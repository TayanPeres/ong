const express = require('express');
const cors = require ('cors');
const routes = require('./routes');
   
const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

/* 
Rotas, recursos

métodos HTTP:
get: Buscar/listar uma informação do back-end , sempre que criar uma rota
que o back-end vai retornar uma alguma informação, dados, listagem vai usar o get.
post: Criar uma informação no back-end
Put: alterar uma informação no back-end
delete: deletar uma informação no back-end 

Tipos de parâmetros: 
Query Params : parâmetros nomeados enviados na rota após "?" (Filtros, paginação) 
Route Params: Parâmetros utilizados para identificar recursos 
Request Body:Corpo da requisição, utilizando para criar ou alterar recursos

Driver do banco de dados: para buscar dados do usuarios (SELECT * FROM users)
Query Builder:da tabela de usuarios eu quero selectionar todo os campos - table('users').selector('*').where()

*/



app.listen(3333);