import React from "react";
import { Box, TextField, Select, MenuItem, Button, InputLabel, FormControl } from "@mui/material";

const TaskForm = ({ taskInput, setTaskInput, taskType, setTaskType, handleSubmit }) => (
  <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3 }}>
    <TextField
      value={taskInput}
      onChange={e => setTaskInput(e.target.value)}
      placeholder="Add a new task..."
      variant="outlined"
      size="small"
      fullWidth
      required
    />
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="task-type-label">Type</InputLabel>
      <Select
        labelId="task-type-label"
        value={taskType}
        label="Type"
        onChange={e => setTaskType(e.target.value)}
      >
        <MenuItem value="study">Study</MenuItem>
        <MenuItem value="work">Work</MenuItem>
        <MenuItem value="personal">Personal</MenuItem>
      </Select>
    </FormControl>
    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{ px: 3, borderRadius: 2, fontWeight: 600 }}
    >
      Add
    </Button>
  </Box>
);

export default TaskForm;