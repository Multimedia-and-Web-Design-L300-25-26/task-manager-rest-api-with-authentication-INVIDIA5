import Task from '../models/Task.js';

// POST /api/tasks
export const createTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const task = await Task.create({
      title,
      description,
      completed: completed ?? false,
      owner: req.user._id,
    });

    return res.status(201).json(task);
  } catch (err) {
    console.error('Create task error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// GET /api/tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user._id }).sort({
      createdAt: -1,
    });
    return res.status(200).json(tasks);
  } catch (err) {
    console.error('Get tasks error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /api/tasks/:id
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.owner.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: 'You are not allowed to delete this task' });
    }

    await task.deleteOne();

    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error('Delete task error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};
