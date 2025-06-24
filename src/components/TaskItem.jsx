import React from 'react';
import {
  ListItem,
  Box,
  IconButton,
  Typography,
  Chip,
  TextField,
  Tooltip,
  Paper,
  Stack,
} from '@mui/material';
import { FaCheckCircle, FaCircle, FaTrash } from 'react-icons/fa';

const typeColors = {
  study: { bgcolor: '#eef2ff', color: '#6366f1' },
  work: { bgcolor: '#fef9c3', color: '#eab308' },
  personal: { bgcolor: '#dcfce7', color: '#22c55e' },
};

const TaskItem = ({
  task,
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
  capitalizeFirstLetter,
  formatDate,
}) => (
  <Paper
    elevation={draggedItemRef && draggedItemRef.current === task.id ? 8 : 2}
    sx={{
      mb: 2,
      borderRadius: 3,
      opacity: draggedItemRef && draggedItemRef.current === task.id ? 0.6 : 1,
      border: task.completed ? '1.5px solid #d1fae5' : '1.5px solid #e0e7ef',
      background: task.completed
        ? 'linear-gradient(90deg, #f0fdf4 0%, #f3f4f6 100%)'
        : 'linear-gradient(90deg, #fff 0%, #f3f4f6 100%)',
      transition: 'box-shadow 0.2s, opacity 0.2s',
      '&:hover': {
        boxShadow: 6,
        background: 'linear-gradient(90deg, #f3f4f6 0%, #e0e7ef 100%)',
      },
      cursor: 'move',
      p: { xs: 2, sm: 3 },
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: { xs: 'flex-start', sm: 'center' },
      gap: 2,
    }}
    draggable
    onDragStart={(e) => handleDragStart(e, task.id)}
    onDragOver={handleDragOver}
    onDrop={(e) => handleDrop(e, task.id)}
    onDragEnd={handleDragEnd}
  >
    {/* Complete Button */}
    <IconButton
      size="medium"
      color={task.completed ? 'success' : 'default'}
      onClick={() => toggleTaskComplete(task.id)}
      sx={{
        mr: 2,
        mt: { xs: 0.5, sm: 0 },
        alignSelf: 'flex-start',
        transition: 'color 0.2s',
      }}
    >
      {task.completed ? <FaCheckCircle /> : <FaCircle />}
    </IconButton>

    {/* Task Content */}
    <Box flex={1} minWidth={0}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ sm: 'center' }}
        justifyContent="space-between"
        spacing={1}
      >
        {editingTaskId === task.id ? (
          <TextField
            value={editingText}
            onChange={handleEditChange}
            onBlur={() => saveEdit(task.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') saveEdit(task.id);
              else if (e.key === 'Escape') cancelEdit();
            }}
            size="small"
            autoFocus
            sx={{ flex: 1, minWidth: 0, bgcolor: '#f1f5f9', borderRadius: 2 }}
            inputProps={{ style: { padding: '8px 10px' } }}
          />
        ) : (
          <Typography
            variant="body1"
            sx={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'text.disabled' : 'text.primary',
              fontWeight: 500,
              fontSize: { xs: '1rem', sm: '1.08rem' },
              wordBreak: 'break-word',
              flex: 1,
              minWidth: 0,
            }}
          >
            {task.text}
          </Typography>
        )}
        <Chip
          label={capitalizeFirstLetter(task.type)}
          size="small"
          sx={{
            ml: { sm: 2 },
            mt: { xs: 1, sm: 0 },
            fontWeight: 600,
            fontSize: '0.85rem',
            letterSpacing: 0.5,
            bgcolor: typeColors[task.type]?.bgcolor,
            color: typeColors[task.type]?.color,
          }}
        />
      </Stack>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ mt: 0.5, display: 'block', fontSize: '0.85rem' }}
      >
        Added {formatDate(task.createdAt)}
      </Typography>
    </Box>

    {/* Actions */}
    <Stack direction="row" alignItems="center" spacing={1.5} mt={{ xs: 1, sm: 0 }}>
      <Tooltip title="Edit task">
        <IconButton
          size="small"
          color="primary"
          onClick={() => startEditing(task)}
        >
          <span role="img" aria-label="edit">✏️</span>
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete task">
        <IconButton
          size="small"
          color="error"
          onClick={() => deleteTask(task.id)}
        >
          <FaTrash />
        </IconButton>
      </Tooltip>
    </Stack>
  </Paper>
);

export default TaskItem;