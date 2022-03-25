const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
  // utiliser la méthode Model.find({})
  try {
    const todos = await Todo.find({});

    res.json({ success: true, msg: todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodo = async (req, res) => {
  console.log(req.body);
  // création d'un document de type Todo
  try {
    const todo = await Todo.create(req.body);
    res.json({ success: true, msg: todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTodo = async (req, res) => {
  // récupérer id de req.params
  // utiliser Model.findOne({_id: id})
  // mettre dans bloc try/Catch
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ _id: id });
    // gérer le cas ou pas de todo
    if(!todo){
      return res.status(400).json({msg: "pas de todos avec cette id"})
    }
    res.json({ success: true, msg: todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editTodo = async (req, res) => {
 // res.json({ success: true, msg: 'editTodo work' });
  // req.body
  // findOneAndUpdate({_id: id}, body)
try {
  const { id } = req.params;

  const todo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
    new: true, 
    runValidators: true
  });
  // gérer le cas ou pas de todo
  if (!todo) {
    return res.status(400).json({ msg: 'pas de todos avec cette id' });
  }
  res.json({ success: true, msg: todo });
} catch (error) {
  res.status(500).json({ msg: error });
}
};

const deleteTodo = async(req, res) => {

  // utilisation de findOneAndDelete({_id: id})
  // gérer les erreurs si pas de todo correspondante
  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: id });
    // gérer le cas ou pas de todo
    if (!todo) {
      return res.status(400).json({ msg: 'pas de todos avec cette id' });
    }
    res.json({ success: true, msg: todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getTodos,
  createTodo,
  getSingleTodo,
  editTodo,
  deleteTodo,
};
