import React from 'react';
import { useGlobalState } from '../context/GlobalState';
import '../index.css';



function Balance() {

    const data = useGlobalState()

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