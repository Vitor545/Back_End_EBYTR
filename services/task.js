const models = require('../models/task');


const getTask = async () => {
  const results = await models.listAllTask();
  return results;
};


const createTask = async (tarefa, data, status) => {
    await models.createNewTask(tarefa, data, status);
};

const updateTask = async (tarefa, status, id) => {
    await models.updatedTask(tarefa, status, id);
}; 

const deleteTask = async (id) => {
  await models.excludedTask(id);
};

module.exports = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};