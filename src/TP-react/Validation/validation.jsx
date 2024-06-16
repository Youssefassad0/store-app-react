import React, { useState } from 'react';

function Validation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [paysS, setPaysS] = useState('');
  const [genre, setGenre] = useState('');
  const [loisir, setLoisir] = useState([]);
  const pays = ['maroc', 'france', 'italy', 'spain'];
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState({});

  function ChangeLoisir(e) {
    var value = e.target.value;
    if (!loisir.includes(value)) {
      setLoisir([...loisir, value]);
    } else {
      setLoisir(loisir.filter(l => l !== value));
    }
  }

  const validate = () => {
    let isValidate = true;
    let errors = {};

    if (!email) {
      errors.email = 'L\'email est requis !';
      isValidate = false;
    }
    if (!password) {
      errors.password = 'Le mot de passe est requis !';
      isValidate = false;
    }
    if (!cPassword || cPassword !== password) {
      errors.cPassword = 'Le mot de passe ne correspond pas !';
      isValidate = false;
    }
    if (!paysS) {
      errors.paysS = 'Veuillez sélectionner votre pays !';
      isValidate = false;
    }
    if (!genre) {
      errors.genre = 'Veuillez sélectionner votre genre !';
      isValidate = false;
    }

    setErrors(errors);
    return isValidate;
  }

  const Submit = (e) => {
    e.preventDefault();
    if (validate()) {
      setData({ email, password, paysS, genre, loisir });
      setErrors({})
      alert('Bon travail');
    }
  };

  return (
    <>
      <form className='container mt-5' onSubmit={Submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Adresse email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">Confirmer le mot de passe</label>
          <input type="password" value={cPassword} onChange={e => setCPassword(e.target.value)} className="form-control" />
          {errors.cPassword && <div className="text-danger">{errors.cPassword}</div>}
        </div>
        <h4>Loisirs :</h4>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="sport"
            onChange={ChangeLoisir}
          />
          <label className="form-check-label" htmlFor="sportCheck">Sports</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="lecture"
            onChange={ChangeLoisir}
          />
          <label className="form-check-label" htmlFor="lectureCheck">Lecture</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value="voyage"
            onChange={ChangeLoisir}
          />
          <label className="form-check-label" htmlFor="voyageCheck">Voyage</label>
        </div>
        <div className="mb-3">
          <label className="form-select-label" htmlFor="paysSelect">Sélectionner le pays</label>
          <select className="form-select" id="paysSelect" value={paysS} onChange={e => setPaysS(e.target.value)}>
            <option value="">Ouvrez ce menu de sélection</option>
            {pays.map((p, i) => (
              <option value={p} key={i}>{p}</option>
            ))}
          </select>
          {errors.paysS && <div className="text-danger">{errors.paysS}</div>}
        </div>
        <div className="mb-2">
          <input type="radio" name="sexe" value="homme" onChange={e => setGenre(e.target.value)} /> Homme
          <input type="radio" name="sexe" value="femme" onChange={e => setGenre(e.target.value)} /> Femme
          {errors.genre && <div className="text-danger">{errors.genre}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Soumettre</button>
      </form>
      {data && (
        <div className="container mt-2">
          <ul>
            <li>Email: {data.email}</li>
            <li>Mot de passe: {data.password}</li>
            <li>Pays: {data.paysS}</li>
            <li>Genre: {data.genre}</li>
            <li>Loisirs: {data.loisir.join(', ')}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Validation;
