import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddressList from './components/AddressList';
import AddAddress from './components/AddAddress';

function App() {
  return (
    <Router>
      <div className='container container-fluid min-vh-100 d-flex flex-column'>
        <Routes>
          {/* Remove `component` prop and ensure `element` prop is used properly */}
          <Route exact path="/" element={<AddressList />} />
          <Route exact path="/add" element={<AddAddress />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
