const {supabase} = require('./superbase');


const listAllTask = async () => {
  const { data, error } = await supabase
  .from('tarefas')
  .select()
    return data;
};

const createNewTask = async (tarefa, data, status) => {
  await supabase
  .from('tarefas')
  .insert([
    { tarefa: tarefa, data: data, status: status },
  ])
};


const updatedTask = async (tarefa, status, id) => {
  await supabase
  .from('tarefas')
  .update({ tarefa, status })
  .match({ id })
};

const excludedTask = async (id) => {
  await supabase
  .from('tarefas')
  .delete()
  .match({ id: id })
};

module.exports = {
  listAllTask,
  createNewTask,
  updatedTask,
  excludedTask
};