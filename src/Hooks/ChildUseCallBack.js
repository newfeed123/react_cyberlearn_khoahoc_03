import React, { memo, useState } from 'react'

function ChildUseCallBack(props) {
    let title = 'vyberlearn'
    let obj = {id: 1, name: 'Khai'}

    console.log('re-render');

    return (
        <div>  
            <small>{props.renderNotify()}</small> 
            <textarea name="" id=""></textarea>
            <br />
            <button className='btn btn-success'>Gửi</button>
        </div>
    )
}

export default memo(ChildUseCallBack) //tranh re-render lại component này
