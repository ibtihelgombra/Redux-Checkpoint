// src/components/ListTask.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('done')}>Done</button>
      <button onClick={() => setFilter('notDone')}>Not Done</button>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
