const Task = require("../model/taskModel");

const taskController = {
    addTask: async (req, res) => {
        try {
            const { title, description, category, dueDate } = req.body;
            const response = await Task.create({user: req.user._id, title, description, category, dueDate });
            res.status(201).json({ message: "Task added successfully", data: response });
        } catch (error) {
            res.status(400).json({ message: "Error adding the task", error });
        }
    },
    getTask: async (req, res) => {
        try {
            const response = await Task.find();
            res.status(200).json({ message: "Task retrieved successfully", data: response });
        } catch (error) {
            res.status(400).json({ message: "Error getting the task", error });
        }
    },
    updateTask: async (req, res) => {
        try {
            const taskId = req.params.id;
            const response = await Task.findByIdAndUpdate(taskId, req.body, {new: true});
            res.status(200).json({ message: "Your task updated successfully", data: response });
        } catch (error) {
            res.status(400).json({ message: "Error getting the task", error });
        }
    },
    deleteTask: async (req, res) => {
        try {
            const taskId = req.params.id;
            await Task.findByIdAndDelete(taskId);
            res.status(200).json({ message: "Your task has been deleted" });
        } catch (error) {
            res.status(400).json({ message: "Error getting the task", error });
        }
    }
}

module.exports = taskController;