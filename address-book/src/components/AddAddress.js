//AddAddress.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import "./AddAddress.css"

const AddAddress = () => {
const nav = useNavigate();
//state for saving form data
const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: ''
});

//handle for updating form
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

//handle for creating new address
const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/addresses', formData).then(() => {
    nav('/');
    });
};

return (
    <div className='container container-fluid min-vh-100 justify-content-center'>
    <h2 className='display-2 text-center'>Add Address</h2>
    < Navigation />
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Name:</label><br></br>
            <input type="text" name="name" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Email:</label><br></br>
            <input type="email" name="email" onChange={handleChange} required className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Contact:</label><br></br>
            <input type="text" name="contact" onChange={handleChange} required  minLength="10" maxLength="10" className='form-control'/>
        </div>
        <div className='form-group'>
            <label>Address:</label><br></br>
            <input type="text" name="address" onChange={handleChange} required className='form-control'/>
        </div>
        <div>
            <button type="submit" className='btn btn-primary'>Add Address</button>
        </div>
        </form>
    </div>
);
};

export default AddAddress;
