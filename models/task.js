const connection = require('./connection');

const listAllTask = async () => {
    const [results] = await connection
    .execute(`SELECT * FROM TodoList.tarefas;`);
    return results;
};

const createNewTask = async (tarefa, data, status) => {
  await connection
.execute(`INSERT INTO TodoList.tarefas (tarefa, data, status) 
VALUES(?, ?, ?);`, [tarefa, data, status]);
};


const updatedTask = async (tarefa, status, id) => {
  await connection
.execute(`UPDATE TodoList.tarefas SET tarefa = ?, 
status = ? WHERE id = ?;`, [tarefa, status, id]);
};

const excludedTask = async (id) => {
  await connection
.execute('DELETE FROM TodoList.tarefas WHERE id = ?;', [id]);
};

module.exports = {
  listAllTask,
  createNewTask,
  updatedTask,
  excludedTask
};