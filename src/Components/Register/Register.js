import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import './Register.css'

const Register = () => {
    
const { register, handleSubmit } = useForm();
const onSubmit = (data) => {
    const url = `http://localhost:4000/addRegister`
    fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => console.log('srever response',res))

};
    // const handleRegister = (data) =>{
    //     const formData = {
    //         name: data.name,
    //         email: data.email,
    //         blood: data.blood

    //     }
       
        
    return (
        <div className="container">
           <div className="row">
               <div className="col-lg-12">
                    <div className="register">
                        <form className="w-50 m-auto" onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" className="form-control" {...register("name")} required/>
                            </div>
                            <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Blood Group</label>
                            <select class="form-select" {...register("blood")}>
                                <option></option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="text" className="form-control" {...register("phnNmb")} required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="text" className="form-control" {...register("email")} required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Address</label>
                                <input type="text" className="form-control" {...register("address")} required/>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default Register;