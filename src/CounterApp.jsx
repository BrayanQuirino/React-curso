import PropTypes from 'prop-types';
import React from 'react'
import { useState } from 'react';


export const CounterApp = ({value}) => {
  
    const [counterValue, setCounterValue] = useState(value);

    const addCounterHandler =  () => {
        setCounterValue(counterValue+1);
    }

    const substrackCounterHandler =  () => {
        setCounterValue(counterValue-1);
    }
    const resentHandler =  () => {
        setCounterValue(0);
    }
  
    
    return(
        <>
            <div className='components'>
                <h1>CounterApp</h1>
                <h2> { counterValue } </h2>
                <div className='button' >
                    <a onClick={addCounterHandler}>Counter ++</a>
                </div>
                <div className='button' >
                    <a onClick={substrackCounterHandler}>Counter --</a>
                </div>
                <div className='button' >
                    <a onClick={resentHandler}>Reset</a>
                </div>
            </div>
        </>
    );
}

CounterApp.prototypes ={
    value: PropTypes.number.isRequired
}
