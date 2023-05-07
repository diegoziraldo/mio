import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/GlobalState';

function Balance() {

    const data = useContext(Context)
  return (
    <div>
        <h1>Balance</h1>
        <div>
            Balance {JSON.stringify(data)}
        </div>
    
    </div>

    )
}

export default Balance