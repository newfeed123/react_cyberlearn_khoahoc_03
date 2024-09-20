import React, { Component } from 'react';
import { Container } from '../../ComponentsToDoList/Container';
import { ThemeProvider } from 'styled-components';
import { ToDoListDarkTheme } from '../../Themes/ToDoListDarkTheme';
import { ToDoListLightTheme } from '../../Themes/ToDoListLightTheme';
import { ToDoListPrimaryTheme } from '../../Themes/ToDoListPrimaryTheme';
import { Dropdown } from '../../ComponentsToDoList/Dropdown';
import { Heading1, Heading2, Heading3, Heading4, Heading5} from '../../ComponentsToDoList/Heading';
import { TextField } from '../../ComponentsToDoList/TextField';
import { Button } from '../../ComponentsToDoList/Button';
import { Table, Tr, Td, Th, Thead, Tboby } from '../../ComponentsToDoList/Table';
import {connect} from 'react-redux'
import { addTaskAction, changeThemeAction, deleteTaskAction, doneTaskAction, editTaskAction, updateTaskAction } from '../../../redux/actions/ToDoListActions';
import { arrTheme } from '../../Themes/ThemeManager';

class ToDoList extends Component {

    state = {
        taskName: '',
        disabled: true,
    }

    renderTaskToDo = () => {
        return this.props.taskList.filter(task => !task.done).map((task, index) => {
            return <Tr key={index}>
                        <Th style={{verticalAlign: 'middle'}}>{task.taskName}</Th>
                        <Th className='text-right'>
                            <Button onClick={() => {
                                this.props.dispatch(editTaskAction(task))
                            }} className='ml-1'><i className='fa fa-edit'></i></Button>
                            <Button onClick={() => {
                                this.props.dispatch(doneTaskAction(task.id))
                            }} className='ml-1'><i className='fa fa-check'></i></Button>
                            <Button onClick={() => {
                                this.props.dispatch(deleteTaskAction(task.id))
                            }} className='ml-1'><i className='fa fa-trash'></i></Button>
                        </Th>
                    </Tr>
        })
    }

    renderTaskCompleted = () => {
        return this.props.taskList.filter(task => task.done).map((task, index) => {
            return <Tr key={index}>
                        <Th style={{verticalAlign: 'middle'}}>{task.taskName}</Th>
                        <Th className='text-right'>
                            <Button onClick={() => {
                                this.props.dispatch(deleteTaskAction(task.id))
                            }} className='ml-1'><i className='fa fa-trash'></i></Button>
                        </Th>
                    </Tr>
        })
    }

    renderTheme = () => {
        return arrTheme.map((theme, index) => {
            return <option value={theme.id}>{theme.name}</option>
        })
    }

    //Life cycle banr 16: thực thi trc khi render, nhận vào props mới thì chạy
    componentWillReceiveProps(newProps){
        console.log('this.props', this.props);
        console.log('newProps', newProps);
        this.setState({
            taskName: newProps.taskEdit.taskName
        })
    }

    // static getDrivedStateFromProps(newProps, currentState){
    //     //newProps là props mới, props cũ là this.props
    //     //currentState: ứng với state hiện tại là this.state
    //     let newState = {...currentState, taskName: newProps.taskEdit.taskName}
    //     return newState
    // }

    render() {
        return (
            <ThemeProvider theme={this.props.themeToDoList}>
                <Container className='w-50'>
                    <Dropdown onChange={(e) => {
                        let {value} = e.target //lấy ra value của option dc chọn
                        this.props.dispatch(changeThemeAction(value))
                    }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3 className=''>To do list</Heading3>
                    <TextField value={this.state.taskName} onChange={(e) => {
                        this.setState({
                            taskName: e.target.value
                        })
                    }} name="taskName" label="task name" className='w-50'></TextField>
                    <Button onClick={() => {
                        //lấy nội dung input
                        let { taskName } = this.state
                        //tạo ra task obj đưa lên store redux thông qua dispatch
                        let newTask = {
                            id: Date.now(),
                            taskName: taskName,
                            done: false
                        }
                        // console.log(newTask)
                        this.props.dispatch(addTaskAction(newTask))
                    }} className='ml-2'><i className='fa fa-plus'></i> Add task</Button>
                    <Button onClick={() => {
                        this.props.dispatch(updateTaskAction(this.state.taskName))
                    }} className='ml-2'><i className='fa fa-upload'></i> Update task</Button>
                    <hr />
                    <Heading3>Task to do</Heading3>
                    <Table>
                        {this.renderTaskToDo()}
                    </Table>
                    <Heading3>Task Completed</Heading3>
                    <Table>
                        {this.renderTaskCompleted()}
                    </Table>
                </Container>
            </ThemeProvider>
        );
    }

    //đây là lifecycle trả về props cũ và state cũ của component sau khi chạy render
    componentDidUpdate(prevProps, prevState){

        //so sánh nếu như props trước đó (taskEdit trước đó mà khác taskEdit hiện tại thì mới setState)

        if(prevProps.taskEdit.id !== this.props.taskEdit.id){
            this.setState({
                taskName: this.props.taskEdit.taskName
            })
        }

    }
}

const mapStateToProps = state => {
    return {
        themeToDoList: state.ToDoListReducer.themeToDoList,
        taskList: state.ToDoListReducer.taskList,
        taskEdit: state.ToDoListReducer.taskEdit,
    }
}

export default connect(mapStateToProps)(ToDoList);