import React from 'react';
import {useHistory} from 'react-router';
const RegisterList = (props) => {
    const {name, email, blood, phnNmb, address} = props.register
    return (
        <div className="register-list">
            <div className="container">
                <h1 className="title">রক্তদাতাগনের তালিকা</h1>
            <table className="table table-bordered table-hover table-responsive-lg">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Blood Group</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{blood}</td>
                        <td>{phnNmb}</td>
                        <td>{address}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default RegisterList;