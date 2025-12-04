import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, userId: req.user._id });
  res.json(task);
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user._id });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
