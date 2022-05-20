const models = require('../models/task');


const getAllTask = async () => {
  const results = await models.listAllTask();
  return results;
};


const createTasks = async (tarefa, data, status) => {
    await models.createNewTask(tarefa, data, status);
};

const taskUpdate = async (tarefa, status, id) => {
    await models.updatedTask(tarefa, status, id);
}; 

const deleteTasks = async (id) => {
  await models.excludedTask(id);
};

module.exports = {
  getAllTask,
  createTasks,
  taskUpdate,
  deleteTasks,
};