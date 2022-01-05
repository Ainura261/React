import React from 'react'
import './CountUI.css'

export default function CountUI(props) {
    return (
        <div className='countUI'>
            <p className={props.count > 0 ?'positive' : props.count < 0 ? 'negative':null}>{props.count}</p> 
            <div className='button__wrapper'>
                <button onClick={props.decrement}>-</button>
                <button onClick={props.increment}>+</button>
            </div>
        </div>
    )
}
