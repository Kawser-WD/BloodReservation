import React from 'react';
import { Link } from 'react-router-dom';
import Image  from './image/blood-donation.png';
import './Navbar.css'


const Top = () => {
    return (
            <nav class="navbar sticky-top navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                  <img style={{width:'40px', height:'40px'}} src={Image} alt=""/>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav"> 
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    {/* <a class="nav-link" aria-current="page" href="#">হোম</a> */}
                    <Link className="nav-link mr-3" to="/">হোম</Link>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="#">রক্তদাতাগনের তালিকা</a> */}
                    <Link className="nav-link mr-3" to="/registered">রক্তদাতাগনের তালিকা</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link mr-3" to="/register">নিবন্ধিত হোন</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link mr-3" to="/dashboard">My Profile</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link mr-3" to="/login">লগইন</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
};

export default Top;