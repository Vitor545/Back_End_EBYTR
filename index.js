const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
  const obj =
    [
      {
        id: 1,
        tarefa: "Fazer compras para o dog",
        data: "21/09/2002",
        status: "pronto"
      },
      {
        id: 2,
        tarefa: "Ir ao cabeleirio",
        data: "21/09/2002",
        status: "andamento"
      },
      {
        id: 3,
        tarefa: "Fazer compras no supermercado",
        data: "21/09/2002",
        status: "andamento"
      },
      {
        id: 4,
        tarefa: "Fazer curso da Trybe",
        data: "21/09/2002",
        status: "andamento"
      }
    ]
  return res.status(200).json(obj)
});


app.listen(5000, () => console.log('ouvindo porta 5000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
