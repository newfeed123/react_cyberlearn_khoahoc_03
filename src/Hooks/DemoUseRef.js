import React, { useRef, useState } from 'react'

export default function DemoUseRef() {

    //giống như DOM
    let inputUserName = useRef(null)
    let inputPassword = useRef(null)

    let userName = ''
    let [userLogin, setUserLogin] = useState({userName: ''})

    const handleLogin = () => {
        console.log(inputUserName.current);
        console.log(inputPassword.current);
        console.log(userName);
        userName = 'abc'
        setUserLogin({
            userName: userName
        })
    }

    return (
        <div className='container'>
            <h3>Login</h3>
            <div className="form-group">
                <h3>Username</h3>
                <input ref={inputUserName} className='form-control' type="text" name='userName' />
            </div>
            <div className="form-group">
                <h3>Password</h3>
                <input ref={inputPassword} className='form-control' type="text" name='password' />
            </div>
            <div className="form-group">
                <button onClick={() => {handleLogin()}} className='btn btn-success'>Login</button>
            </div>
        </div>
    )
}
