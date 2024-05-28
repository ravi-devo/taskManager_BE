const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/addTask', authMiddleware, taskController.addTask);
router.get('/getTask', authMiddleware, taskController.getTask);
router.put('/:id', authMiddleware, taskController.updateTask);
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;