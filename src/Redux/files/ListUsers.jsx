import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DELETE_USER } from '../actions';

function ListUsers() {
    const voitures = useSelector(state => state.voitures);
    const dispartch = useDispatch();
    const deleteVoitre = (id) => {
        dispartch(DELETE_USER(id));
    }
    return (
        <div className='container m-5 p-4' >
            <h1 className="text-center">CRUD-REDUX</h1>
            <Link to="/redux/add-users" > <h4 className="nav-item">ADD USER </h4> </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th className="col">ID</th>
                        <th className="col">Marque</th>
                        <th className="col">Model</th>
                        <th className="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        voitures.map(v => (
                            <tr key={v.id}>
                                <td>
                                    {v.id}
                                </td><td>
                                    {v.marque}
                                </td><td>
                                    {v.modele}
                                </td>
                                <td>
                                    <div className="d-flex justify-between ml-4">

                                        <Link to={`/redux/users/${v.id}`} >
                                            <button className="btn btn-success m-2">
                                                EDIT
                                            </button>
                                        </Link>
                                        <button className="btn btn-danger m-2" onClick={() => deleteVoitre(v.id)} >DELETE</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUsers