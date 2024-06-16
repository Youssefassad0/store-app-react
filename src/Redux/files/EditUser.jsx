import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_USER, UPDATE_USER } from '../actions';
import { useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const {id}=useParams();
  const voiture = useSelector(state=>state.voitures.find(v=>v.id===parseInt(id)));
    const [marque, setMarque] = useState(voiture.marque);
    const [modele, setModele] = useState(voiture.modele);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const modifier = () => {
        const voiture = {
          id:id,
            marque: marque,
            modele: modele
        }
        console.log(voiture);
        dispatch(UPDATE_USER(voiture))
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
                <button className="btn btn-primary" onClick={modifier} >Ajouter </button>
            </form>
        </div>
    )
}

export default EditUser