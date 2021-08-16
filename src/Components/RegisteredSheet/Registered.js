import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Register from '../Register/Register';
import './Registered.css'
import RegisterList from './RegisterList';
const Registered = () => {

    const [registerList, setRegisterList] = useState([])
    useEffect(() => {
       fetch(`http://localhost:4000/register`)
       .then(res => res.json() )
       .then(data=> setRegisterList(data))

    },[])

    return (
       <div>
         <div className="container">
            <div className="row">
            {
            registerList.map(register=> <RegisterList register={register}></RegisterList> )
            }
            </div>
         </div>
       </div>
    );
};

export default Registered;