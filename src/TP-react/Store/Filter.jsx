import React from 'react'

function Filter({chercherProduit,inputValue,setInputValue,reset}) {
    return (
        <div>   
            <div className="d-flex mr-2">
            <input type="text" placeholder="title's product" value={inputValue} onChange={e=>setInputValue(e.target.value)} className="form-input" />
            <button onClick={chercherProduit} >Search</button>
            <button onClick={reset}  >Reset</button>
        </div>
        </div>
    )
}

export default Filter