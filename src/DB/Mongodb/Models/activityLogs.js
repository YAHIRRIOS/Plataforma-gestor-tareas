import ActivityLog from './models/ActivityLog.js';
import User from './models/User.js';
import Task from './models/Task.js';

const user = await User.findOne({ email: 'john@example.com' });
const task = await Task.findOne({ title: 'Implementar login' });

const log = new ActivityLog({
  actor: user._id,
  action: 'updated',
  target_type: 'Task',
  target_id: task._id,
  metadata: {
    changes: {
      title: 'Implementar login con OAuth',
      priority: 'high',
    }
  }
});

await log.save();
