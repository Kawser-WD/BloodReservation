import React from 'react';
import { Carousel } from 'react-bootstrap'
import './PhotoGallery.css'
import Image1 from './Gallery/gallery1.jpg'
import Image2 from './Gallery/gallery2.jpg'
import Image3 from './Gallery/gallery3.jpg'
const PhotoGallery = () => {
    return (
       <section className="Gallery">
           {/* <h1 className="info">ফটো গ্যালারি</h1>
           <div className="p-slider">
           <div className="slider">
           <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100 h-100"
                src={Image1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="title">রক্ত দিন জীবন বাচাঁন।</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-100"
                src={Image2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="title">রক্ত দিন জীবন বাচাঁন।</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-100"
                src={Image3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="title">রক্ত দিন জীবন বাচাঁন।</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel> */}
           {/* </div>
           </div> */}
           <div className="container">
           <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
           <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={Image1} class="d-block w-50" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={Image2} class="d-block w-50" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={Image3} class="d-block w-50" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
           </div>
       </section> 
            
    );
};

export default PhotoGallery;