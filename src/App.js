import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import NavBar from './NavBar';
import AddTable from './Components/AddTable';
import Props from './Components/Props/Home';

function App() {
  return (
    <div className="App">
   <BrowserRouter >
      <NavBar/>
   <Routes>
    <Route  path='/' element={<Form text={"HELLO WORLD"} />} />
    <Route path='/home' element={<AddTable/>} />
    <Route path='/props' element={<Props/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
