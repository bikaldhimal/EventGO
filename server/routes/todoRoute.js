const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

const todoController = require("./../controller/todoController");

router.post("/add-todo", todoController.createTodo);
router.get("/:userId", todoController.getTodos);
router.delete("/:id", todoController.deleteTodo);
router.put("/:id", todoController.updateTodo);

module.exports = router;
