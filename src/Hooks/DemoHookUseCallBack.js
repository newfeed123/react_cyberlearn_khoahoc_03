import React, { useState, useCallback } from 'react'
import ChildUseCallBack from './ChildUseCallBack'

export default function DemoHookUseCallBack(props) {
    let [like, setLike] = useState(1)

    const renderNotify = () => {
        return `ban da tha ${like} lan`
    }

    const callbackRenderNotify = useCallback(renderNotify, [])

    return (
        <div className='m-5'>   
            Like: {like} tim
            <br />
            <span onClick={() => {
                setLike(like + 1)
            }} style={{ cursor: 'pointer', color: 'red', fontSize: 35 }}>
                tim
            </span>

            {/* <small>{renderNotify()}</small> */}

            <br />
            <br />
            <ChildUseCallBack renderNotify={callbackRenderNotify}></ChildUseCallBack>
        </div>
    )
}
