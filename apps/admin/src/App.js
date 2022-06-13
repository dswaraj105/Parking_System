import './App.css';

import { Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar/Navbar';
import HomePage from './pages/home';
import EntryPage from './pages/entry';
import UserPage from './pages/user';
import CheckoutPage from './pages/checkout';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/entry" element={<EntryPage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
