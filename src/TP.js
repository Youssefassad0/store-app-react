import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './TP-react/Store/ProductList';
import Product from './TP-react/Store/Product';
import Home from './Home';
import Validation from './TP-react/Validation/validation';
import AddTable from './Components/AddTable';
import Props from './Components/Props/Home';
import ListUsers from './Redux/files/ListUsers';
import AddUser from './Redux/files/AddUser';
import EditUser from './Redux/files/EditUser';

function App() {
  return (
    <div className="App">
   <BrowserRouter >
   <Routes>
   <Route path='/' element={<Home/>}  /> 
   <Route path='/products' element={<ProductList/>}  /> 
   <Route path='products/:id' element={<Product/>}  /> 
   <Route path='/validation' element={<Validation />} />
   <Route path='/home' element={<AddTable/>} />
   <Route path='/props' element={<Props/>}/>
   <Route path='/redux/users' element={<ListUsers/>} />
   <Route path='/redux/add-users' element={<AddUser/>} />
   <Route path='/redux/users/:id' element={<EditUser/>} />

    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
