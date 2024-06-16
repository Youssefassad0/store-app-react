import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ADD_USER } from '../actions';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const [marque, setMarque] = useState('');
    const [modele, setModele] = useState('');
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const ajouter = () => {
        const voiture = {
            marque: marque,
            modele: modele
        }
        console.log(voiture);
        dispatch(ADD_USER(voiture))
        navigate('/redux/users');

    }
    return (
        <div className='container d-flex align-items-center justify-content-center mt-5' >
            <form className="form-group">
                <div className="input-group mb-3">
                    <input type="text" className='form-control'  value={marque} onChange={e=>setMarque(e.target.value)   } placeholder='Marque de voiture ... ' />
                </div> <div className="input-group mb-3">
                    <input type="text" className='form-control' value={modele} onChange={e=>setModele(e.target.value)   } placeholder='Modele de voiture ... ' />
                </div>
                <button className="btn btn-primary" onClick={ajouter} >Ajouter </button>
            </form>
        </div>
    )
}

export default AddUser