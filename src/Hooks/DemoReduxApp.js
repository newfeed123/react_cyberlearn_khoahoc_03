import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { commentAction } from '../redux/actions/FakeBookActions'
export default function DemoReduxApp() {

    let comments = useSelector(state => state.FakeBookReducer.comments)
    //dipatch lên reducer
    let dispatch = useDispatch()

    let [userComment, setUserComment] = useState({
        name: '', 
        content: '',
        avatar: '',
    })
    console.log(userComment);
    const handleChange = (e) => {
        let {value, name} = e.target
        setUserComment({
            ...userComment,
            [name]: value
        })
    }

    const handleComment = (e) => {
        e.preventDefault()

        let userComment_update = {...userComment, avatar: `https://i.pravatar.cc/150?u=${userComment.name}`}

        // let action = {
        //     type: 'add_comment',
        //     userComment_update,
        // }
        dispatch(commentAction(userComment_update))
    }

    return (
        <div className='container'>
            <h3>Facebook App</h3>
            <div className="card text-left">
                <div className="card-header">
                    {comments.map((comments, index) => {
                        return <div className="row mt-3" key={index}>
                            <div className="col-1">
                                <img style={{height: 50, }} src={comments.avatar} alt="" />
                            </div>
                            <div className="col-11">
                                <h6 className="text-danger">{comments.name}</h6>
                                <b className="">{comments.content}</b>
                            </div>
                        </div>
                    })}
                </div>
                <form onSubmit={handleComment} className="card-body">
                    <div className="form-group">
                        <h4 className="card-title">Name</h4>
                        <input onChange={handleChange} type="text" className='form-control' name='name' />
                    </div>
                    <div className="form-group">
                        <h4 className="card-title">Content</h4>
                        <input onChange={handleChange} type="text" className='form-control' name='content' />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-success'>Send</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
