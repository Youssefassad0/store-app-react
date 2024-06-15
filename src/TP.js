import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './TP-react/Store/ProductList';
import Product from './TP-react/Store/Product';

function App() {
  return (
    <div className="App">
   <BrowserRouter >
   <Routes>
   <Route path='/' element={<ProductList/>}  /> 
   <Route path='/product/:id' element={<Product/>}  /> 
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
