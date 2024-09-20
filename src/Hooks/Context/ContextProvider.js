import React, { useReducer } from 'react'

//component sẽ bao quát toàn bộ ứng dụng
//giống redux có cái thẻ Provider bao qoàn bộ ứng dụng

export const context = React.createContext()
const initialCart = [
    // {id: 1, name: 'iphone', price: 1000, quantity: 1}
]

const cartReducer = (state, action) => {

    switch(action.type){
        case 'addToCart': {
            let cartUpdate = [...state]

            let index = cartUpdate.findIndex(itemCart => itemCart.id === action.item.id)
            if(index !== -1){
                //san pham da ton tai
                cartUpdate[index].quantity += 1
            } else{
                const itemCart = {...action.item, quantity: 1}
                cartUpdate.push(itemCart)
            }

            return cartUpdate
        }
    }

    return [...state]
}
export default function ContextProvider(props) {
    let [cart, dispatch] = useReducer(cartReducer, initialCart) 

    //store giống như rootReducer
    const store = {
        //có thể chứa nhiều reducer
        cartReducer: [cart, dispatch]
    }

    return (
        <context.Provider value={store}>
            {props.children}
            {/* Các component bên trong App.js dc render o đây và dùng được state  */}
        </context.Provider>
    )
}
