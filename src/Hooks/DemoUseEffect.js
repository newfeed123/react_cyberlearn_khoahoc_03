import React, { useEffect, useState } from 'react'

export const DemoUseEffect = () => {

    let [number, setNumber] = useState(1)

    console.log("render chay trc");

    // useEffect(() => {
    //     console.log("chay sau khi render");
    // })

    // useEffect(() => {
    //     console.log("chay 1 lan sau khi render");
    // }, [])

    useEffect(() => {
        console.log("chay sau khi render sau khi number thay ddooi");
    }, [number])

    const handleIncrease = () => {
        let newNumber = number + 1
        setNumber(newNumber)
    }

    return (
        <div>
            <button onClick={() => {
                handleIncrease()
            }} className='btn btn-success'>+</button>
            <div className="card text-left">
                <img className="w-50 h-50 card-img-top" src="https://picsum.photos/200/200" alt="https://picsum.photos/200/200" />
                <div className="card-body">
                    <h4 className="text-danger card-title">{number}</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>
        </div>
    )
}
