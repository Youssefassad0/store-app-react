import React, { useState } from 'react'

function Form({ text }) {
    const [name,setName]=useState('');
    const [adresse,setAdresse]=useState('');
    const [password,setPassword]=useState('');
    const handlCLick = (e) => {
        e.preventDefault();
        if(name!=="" && adresse!=="" && password !== ""){
            alert(name)
        }
        else{
            alert(text);
        }
    }
    return (
        <div>
            <form onSubmit={handlCLick} >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" value={adresse} onChange={e=>setAdresse(e.target.value)} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)}  className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}  className="form-control" />
                </div>
                <button className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    )
}

export default Form