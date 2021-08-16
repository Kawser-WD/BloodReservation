import React from 'react';
import Article from './Article/Article';
import Blood from './Blood/Blood';
import Contact from './ContactUs/Contact'
import PhotoGallery from './Gallery/PhotoGallery'

const Home = () => {
    return (
        <div>
           <Blood/>
           <Article/>
           <Contact/>
        </div>
    );
};

export default Home;