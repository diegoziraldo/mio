import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/GlobalState';
import '../index.css';



function Balance() {

    const data = useContext(Context)
  return (
    <div className="componenteBordes">
        <h1>Componente Balance</h1>
        <div>
            Balance {JSON.stringify(data)}
        </div>
    
    </div>

    )
}

export default Balance