import { ToDoListLightTheme } from "../../JSS_StyledComponent/Themes/ToDoListLightTheme"
import { add_task, change_theme, delete_task, done_task, edit_task, update_task } from "../types/ToDoListTypes"
import { arrTheme } from '../../JSS_StyledComponent/Themes/ThemeManager'


const initialState = {
    themeToDoList: ToDoListLightTheme,
    taskList: [
        {id: 'task-1', taskName: 'task1', done: true},
        {id: 'task-2', taskName: 'task2', done: false},
        {id: 'task-3', taskName: 'task3', done: false},
        {id: 'task-4', taskName: 'task4', done: true},
    ],
    taskEdit: {
        id: 'task-1', taskName: 'task1', done: false
    }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task:{
        if(action.newTask.taskName.trim() === ''){
            alert('Task name is required')
            return {...state}
        }

        let taskListUpdate = [...state.taskList]

        let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName)

        if(index !== -1){
            alert('task name already exists')
            return {...state}
        }

        taskListUpdate.push(action.newTask)

        state.taskList = taskListUpdate

        return {...state}
    }

    case change_theme:{
        //tìm ra theme dựa vào action.themeId dc chọn
        let theme = arrTheme.find(theme => theme.id == action.themeId)
        if(theme){
            //set lại theme cho state.themeTodoList
            state.themeToDoList = {...theme.theme} //thay đổi thành 1 obj hoàn toàn mới thì dùng ...
        }
        return {...state}
    }

    case done_task: {
        // console.log('done_task', action);
        //click vaof button check => dispathc action cos taskId
        let taskListUpdate = [...state.taskList]

        let index = taskListUpdate.findIndex(task => task.id === action.taskId)
        if(index !== -1){
            taskListUpdate[index].done = true //cập nhật lại thuộc tính done = true
        }
        // state.taskList = taskListUpdate
        return {...state, taskList: taskListUpdate}
    }

    case delete_task: {
        let taskListUpdate = [...state.taskList]
        taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId)
        return {...state, taskList: taskListUpdate}
    }

    case edit_task: {
        return {...state, taskEdit: action.task}
    }

    case update_task: {
        state.taskEdit = {...state.taskEdit, taskName: action.taskName}
        let taskListUpdate = [...state.taskList]
        let index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id)
        if(index !== -1){
            taskListUpdate[index] = state.taskEdit
        }
        state.taskList = taskListUpdate

        return {...state}
    }

  default:
    return state
  }
}
