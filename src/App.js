import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import SignUp from './SignUp';
import Login from './Login';
import ShoppingList from './ShoppingList';
import { NavBar } from './NavBar';
import { BrowserRouter, Routes, Switch, Route, useParams, Redirect, withRouter } from 'react-router-dom'
import CreateShoppingList from './NewList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<SignUp />}>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path='/shoppingList' element={<ShoppingList />}>
          </Route>
          <Route path='/newList' element={<CreateShoppingList />}>
          </Route>
          <Route path='/shoppingHistory' element={<ShoppingList />}>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;






