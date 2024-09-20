//chứa rất nhiều actions để dispatch() lên reducer

import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../types/ToDoListTypes";

export const addTaskAction = (newTask) => ({
  type: add_task,
  newTask //truyền vào obj task mới 
})

export const changeThemeAction = (themeId) => ({
  type: change_theme,
  themeId //truyền vào obj task mới 
})

export const doneTaskAction = (taskId) => ({
  type: done_task,
  taskId //truyền vào obj task mới 
})

export const deleteTaskAction = (taskId) => ({
  type: delete_task,
  taskId
})

export const editTaskAction = (task) => ({
  type: edit_task,
  task
})

export const updateTaskAction = (taskName) => ({
  type: update_task,
  taskName
})
