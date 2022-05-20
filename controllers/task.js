const services = require('../services/task');

const getTask = async (_req, res, next) => {
  try {
    const task = await services.getAllTask();
    return res.status(200).send(task);
  } catch (e) {
    next(e);
  }
};


const createTask = async (req, res, next) => {
  try {
    const {tarefa, data, status} = req.body;
    await services.createTasks(tarefa, data, status, res);
    return res.status(201).send({ message: 'created' });
  } catch (e) {
    next(e);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const {tarefa, status} = req.body;
    const { id } = req.params;
    await services.taskUpdate(tarefa, status, id, res);
    return res.status(200).send({ message: 'updated' });
  } catch (e) {
    next(e);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await services.excludeTask(id);
    return res.status(204).end();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};