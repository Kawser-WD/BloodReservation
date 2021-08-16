import React from 'react';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="container">
            <h1 className="title">Your Profile</h1>
           <div className="row">
               <div className="col-lg-12 col-12">
                    <div className="register">
                        <form className="w-50 m-auto">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Blood Group</label>
                            <select class="form-select" aria-label="Default select example">
                                <option></option>
                                <option value="1">A+</option>
                                <option value="2">A-</option>
                                <option value="3">B+</option>
                                <option value="4">B-</option>
                                <option value="5">O+</option>
                                <option value="6">O-</option>
                                <option value="7">AB+</option>
                                <option value="8">AB-</option>
                            </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                            </div>
                            <button type="submit" class="btn btn-primary">SAVE</button>
                        </form>
                    </div>
               </div>
           </div>
        </div>
        </div>
    );
};

export default Dashboard;