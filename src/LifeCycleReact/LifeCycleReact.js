import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class LifeCycleReact extends Component {

    //dự án cũ thường có cái này
    //khởi tạo trc khi chạy render()
    constructor(props){
        super(props)
        this.state = {
            number: 1
        }
    }

    //được gọi khi component này được sử dụng trên DOM (giao diện của app)
    static getDerivedStateFromProps(newProps, current){
        console.log("getDerivedStateFromProps");
        return null
    }

    //Được gọi khi setState hoặc thay đổi props
    shouldComponentUpdate(){

        //return true thì chạy tiếp các lifecycle còn lại, false thì sẽ dừng lại ko chạy tiếp các lifecycle khác
        return true 
    }

    render() {
        return (
            <div>
                <h1>Parent component</h1>
                <span>Number: {this.state.number}</span>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }} className='btn btn-success ml-2'>+</button>
                <ChildComponent></ChildComponent>
            </div>
        );
    }

    //được gọi sau render và chạy 1 lần duy nhất (trạng thái muoting)
    componentDidMount(){
        console.log('componentDidMount');
    }

    //lần đầu sẽ không gọi, chỉ gọi khi setState hoặc thay đổi props
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
    }
}

export default LifeCycleReact;