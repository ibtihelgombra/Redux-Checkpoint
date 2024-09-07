// src/components/Task.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions/taskActions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask(task.id, newDescription));
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
      />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <span>{task.description}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Edit'}
      </button>
    </div>
  );
};

export default Task;
