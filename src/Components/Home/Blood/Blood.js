import React from 'react';
import Poster from './Poster/blood-donation (1).png'
import image1 from './Poster/gallery1.jpg'
import image2 from './Poster/gallery2.jpg'
import image3 from './Poster/gallery3.jpg'
import './Blood.css'
const Blood = () => {
    return (
        <section className="Blood">
           <div className="container">
            <div className="row">
                <div className="col-md-6 col-6">
                <h1 className="text" style={{marginTop:'120px', color:''}}>রক্ত দিন মানবিক <br /> সেবায় এগিয়ে আসুন।</h1>
                <button className="button">নিবন্ধিত হোন</button>
                </div>
                <div className="col-6 col-md-6"> 
                <img className="banner" src={Poster} />
                {/* <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                        <img src={image1} class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                        <img src={image2} class="d-block w-100" />
                        </div>
                        <div class="carousel-item">
                        <img src={image3} class="d-block w-100" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div> */}
                </div>
            </div>
            </div> 
        </section>
    );
};

export default Blood;