//Navigation.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircleFill , JournalText} from 'react-bootstrap-icons';
import "./Navigation.css"

const Navigation = () => {
const nav = useNavigate();
//route for home page
const gotoHome = ()=>{
    nav('/');
}

//route for add address page
const gotoAdd = ()=>{
    nav('/add');
}

return (
    <nav className='container d-flex flex-row m-3'>
        <h2 className='p-2 m-1' onClick={gotoHome}><JournalText /></h2>
        <h2 className='p-2 m-1' onClick={gotoAdd}><PlusCircleFill /></h2>
    </nav>
);
};

export default Navigation;
