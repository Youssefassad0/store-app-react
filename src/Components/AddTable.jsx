import React, { useState } from 'react';

function AddTable() {
    const [voiture, setVoiture] = useState([
        { id: 1, name: 'Audi' },
        { id: 2, name: 'BMW' },
        { id: 3, name: 'Mercedes' },
    ]);
    const [name, setName] = useState('');
    const [id, setId] = useState(4);
    const [editId, setEditId] = useState(null);

    // Function to add or update a car
    const handleSubmit = (e) => {
        e.preventDefault();
      if(editId!==null){
setVoiture(voiture.map(v=>v.id===editId ? {...v,name:name} : v))
      }else{
        const newCar={
            id:id,
            name:name
        }
        setVoiture([...voiture,newCar]);
        setId(id+1);
        setName('');
      }
    };

    // Function to handle edit button click
    const handleEdit = (id) => {
        const voitureEditer= voiture.find(v=>v.id===id);
        setName(voitureEditer.name);
        setEditId(id);
    };
    // fonction pour supprimer 
    const deleteCar = (id)=>{
        const carsFiltrer=voiture.filter(v=>v.id!==id);
        setVoiture(carsFiltrer);
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Car Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                />
                <input
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    value={editId === null ? "ADD" : "UPDATE"}
                />
            </div>
            <table className="table table-striped m-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {voiture.map((v, i) => (
                        <tr key={i}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>
                                <button className="btn btn-success" onClick={() => handleEdit(v.id)}>Modify</button>
                                <button className="btn btn-danger" onClick={()=>deleteCar(v.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddTable;
