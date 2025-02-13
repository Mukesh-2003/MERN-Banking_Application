import React, { useState } from 'react';
import '../styles/landing.css';
import About1 from '../assets/bank.jpg';
import About2 from '../assets/blue.jpg';
import About3 from '../assets/siri.png';
import Login from '../components/Login';
import Register from '../components/Register';

const Landing = () => {

    const [isLoginBox, setIsLoginBox] = useState(true);


  return (
    <div className='landingPage'>
        
        <div className="landing-header">
            <span className="landing-header-logo"><img src="" alt="" /></span>
            <ul>
                <li className='header-li'><a href="#home"><b>Home</b></a></li>
                <li className='header-li'><a href="#about"><b>About</b></a> </li>
                <li className='header-li'><a href="#home"><b>Join now</b></a></li>
            </ul>
        </div>


        <div className="landing-body">

            <div className="landing-hero" id='home'>
                <div className="landing-hero-content">
                    <div className='banner'>
                    <img src ={About3} className='siri' alt="" />
                    <h2 className='banktitle'>SIRI Bank</h2>
                    </div>
                    
                    <p>With our user-friendly banking app, which is made to offer smooth access to all of your accounts, transactions, and services, you can streamline your financial management.</p>

                    <div className="authentication-form">

                        { isLoginBox ?

                            <Login setIsLoginBox={setIsLoginBox} />
                            :
                            <Register setIsLoginBox={setIsLoginBox} />
                        }

                    </div>

                </div>


                <div className="landing-hero-image">
                    
                        <div id='landing-image-sidebar-left'></div>
                        <div className="back"></div>
                        <div id='landing-image-sidebar-right'></div>
                   
                </div>
            </div>

            <div className="landing-about" id='about'>

                <div className="about-1">
                    <img src={About1} className='about-1-img' alt="" />
                    <div className="about-1-content">

                        <h3>Safe Deposit Boxes & Guaranteed Maturity</h3>
                        <p>There has never been an easier or more secure way to deposit money. Feel secure in the knowledge that your money is protected by the best protection available. You can use our app to put money into our cutting-edge safety deposit boxes and take full management of your financial assets. </p>
                        <a href='#home'>Join now!!</a>

                    </div>
                </div>
                <div className="about-2">
                    <div className="about-2-content">
                        <h3>Boost Your Goals Regarding Money</h3>
                        <p>Reaching your financial objectives and opening up new opportunities. LoanLift offers a variety of customised loan options to meet your demands, whether you want to launch a business, go back to school, or remodel your house. Our easy-to-use application procedure makes getting a loan simple, and our reasonable interest rates guarantee timely repayments.</p>
                        <a href='#home'>Join now!!</a>
                    </div>
                    <img src={About2} className='about-2-img' alt="" />
                </div>

            </div>

            <div className="footer">
                <p>All rights reserved - &#169; Bank.com</p>
            </div>


        </div>

    </div>
  )
}

export default Landing