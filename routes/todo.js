import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();

const todos = {};

router.post("/", (req, res) => {
  const todo = new Todo(req.body);

  todos[todo.id] = todo;

  res.send(todo);
});

router.get("/", (req, res) => {
  const todoList = Object.values(todos);

  res.send(todoList);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  const todo = new Todo({ ...req.body, id });

  todos[id] = todo;

  res.send(todo);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  delete todos[id];

  res.send({ id });
});

export { router as default, router as todos, router };
