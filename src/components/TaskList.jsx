import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import TaskItem from './TaskItem';

const TaskList = ({
  tasks,
  draggedItemRef,
  handleDragStart,
  handleDragOver,
  handleDrop,
  handleDragEnd,
  toggleTaskComplete,
  editingTaskId,
  editingText,
  handleEditChange,
  saveEdit,
  cancelEdit,
  startEditing,
  deleteTask,
  getTagClass,
  capitalizeFirstLetter,
  formatDate,
}) => (
  <List id="task-list" sx={{ width: '100%', bgcolor: 'transparent', p: 0 }}>
    {tasks.length === 0 ? (
      <ListItem sx={{ justifyContent: 'center', py: 4 }}>
        <Typography color="text.secondary" align="center" id="empty-state">
          No tasks for today. Add a new task!
        </Typography>
      </ListItem>
    ) : (
      tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          draggedItemRef={draggedItemRef}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
          handleDragEnd={handleDragEnd}
          toggleTaskComplete={toggleTaskComplete}
          editingTaskId={editingTaskId}
          editingText={editingText}
          handleEditChange={handleEditChange}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          startEditing={startEditing}
          deleteTask={deleteTask}
          getTagClass={getTagClass}
          capitalizeFirstLetter={capitalizeFirstLetter}
          formatDate={formatDate}
        />
      ))
    )}
  </List>
);

export default TaskList;