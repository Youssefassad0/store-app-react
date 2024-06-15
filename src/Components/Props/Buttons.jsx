import React from 'react'

function Buttons({crease,reset,decrease}) {
  return (
    <div className="d-flex w-2 mt-5 justify-content-around">
    <div onClick={crease} className="btn btn-success" >+</div>
    <div onClick={reset} className="btn btn-primary">0</div>
    <div onClick={decrease} className="btn btn-danger">-</div>
</div>  )
}

export default Buttons