import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 font-bold text-lg">
             This is Auth Email registration form.User can easily use this form by using login this site .And also added more feature to tap here.
            </p>
            <button className="btn btn-primary font-bld"><Link to="/login">Show Details</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Home;