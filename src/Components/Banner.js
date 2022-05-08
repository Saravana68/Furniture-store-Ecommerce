/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Banner.css';

import { Navbar } from './Navbar';

import browse from '../images/shopping.gif';
import cart from '../images/catalog.gif';
import Cod from '../images/COD.gif';
import { Button } from 'bootstrap';

function Banner() {
    return (
        <>
        <Navbar/>
		<div className="banner-container">
			Welcome to Wood-Town! <span>❤️</span>  
			<div className="inner-container">
				<div className="gif-container">
					<img src={browse} alt="browse-catalog" />
				</div>
				<div className="text-container">
					<div> ✅    Browse the Catalog!</div>
                    <div> ✅ choose the favourite one!</div>
				</div>
			</div>
            <div className="inner-container">
                <div className="text-container">
					<div> ✅ Add items to the cart!</div>
					<div> ✅ Proceed to Checkout!</div>
				</div>
				<div className="gif-container">
					<img src={cart} alt="browse-catalog" />
				</div>
			</div>
			<div className="inner-container">
				<div className="gif-container">
					<img src={Cod} alt="browse-catalog" />
				</div>
				<div className="text-container">
					<div> ✅Select Cash on Delivery!</div>
					<div> ✅Happy Shopping!</div>
				</div>
                </div>
                <div>Made with ❤️ by SaravanaKumar! </div>
            </div>
            </>
	);
}

export default Banner;
