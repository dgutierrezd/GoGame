import { Request, Response } from "express";
import Todo from "../models/todo";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const { user } = req.params;
    const todos = await Todo.findAll({ where: { username: user } });
    res.status(200).json(todos);
  } catch (error) {
    res.status(204).json({ todos: [] });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.create(req.body);
    console.log("res", todo);
    res.status(201).json(todo);
  } catch (error) {
    console.log("errr", error);
    res.status(500).json({ error });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Todo.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedTodo = await Todo.findOne({ where: { id } });
      res.status(200).json(updatedTodo);
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.destroy({
      where: { id },
    });
    if (deleted) {
      res.status(204).send("Todo deleted");
    } else {
      res.status(404).send("Todo not found");
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};
