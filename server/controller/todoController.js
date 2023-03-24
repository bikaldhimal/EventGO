const Todo = require("./../model/todoModel"); //assuming a Todo model exists

// Create a new todo for the user
exports.createTodo = async (req, res) => {
  try {
    const { description, userId } = req.body;

    // checking if todo already exists
    const todo = await Todo.findOne({
      description,
    });
    if (todo) {
      return res.status(400).json({
        error: "Todo already exists with the same description",
        status: 409,
      });
    }

    const newTodo = await Todo.create({
      description,
      userId,
    });
    await newTodo.save();
    res.status(201).json({ success: true, todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all todos for the user
exports.getTodos = async (req, res) => {
  try {
    const userId = req.params.userId;
    const todos = await Todo.find({ userId: userId }); // assuming user ID is stored in req.user
    res.status(200).json({ todos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  const { description, status } = req.body;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todo.description = description || todo.description;
    todo.status = status || todo.status;

    await todo.save();

    return res.json({
      updatedTodo: todo,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
};

// Delete a specific todo for the user
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne({ _id: id, user: req.userId }); // assuming user ID is stored in req.user
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    await todo.delete();
    res
      .status(200)
      .json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};
