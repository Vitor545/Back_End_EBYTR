const express = require('express');
const cors = require('cors');
const error = require('./middlewares/error');
const { getTask, createTask, updateTask , deleteTask } = require('./controllers/task');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/task', getTask);
app.post('/task', createTask);
app.put('/task/:id', updateTask);
app.delete('/task/:id', deleteTask);

app.use(error);



app.listen(5000, () => console.log('ouvindo porta 5000!'));

