import React, { useContext } from 'react'
import { context } from './Context/ContextProvider'
export default function DemoUseContext(props) {

    // let store = useContext(context)
    // let cartReducer = store.cartReducer
    // console.log(store);
    let {cartReducer} = useContext(context)

    let [cart, dispatch] = cartReducer
    //giỏ hàng
    return (
        <div>

        </div>
    )
}
