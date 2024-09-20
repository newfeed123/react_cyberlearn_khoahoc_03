import React, { useState } from 'react'

export default function DemoHookUseState(props) {
    //this.state = {}
    //this.setState(newState)
    let [state, setState] = useState({like: 0})

    const handleLike = () => {
        setState({
            like: state.like + 1
        })
    }
    console.log(state.like);
    
    return (
        <div className='container m-5'>
            <div className="card text-left">
                <img style={{height: 250, width: 250}} className="card-img-top" src="https://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">{state.like} </p>
                </div>
            </div>
            <button onClick={handleLike} className='btn btn-danger'>Like</button>
        </div>
    )
}
