import React from 'react';
import './HomePage.css';
import TopMenu from './TopMenu';
import RedSuitImage from './assets/images/amiya+red+suit.jpg';
import BrandImage from './assets/images/amiya+brand.jpeg';
import PinkSuitImage from './assets/images/amiya+pink+suit.jpg';


function HomePage() {
    return (
      <div className="HomePage">
        <TopMenu />
        <div className="home-wrapper">
            <div className="about-section">
                <h1>About Amiya</h1>
                <image src={RedSuitImage} alt="Amiya Ingram is wearing a red suit, formal white shirt, and standing in a power pose with arms crossed." />
            </div>
            <div className="career-section">
                <h1>From Madison to Microsoft: Amiya Ingram’s Unstoppable Rise</h1>
                <image src={BrandImage} alt="Amiya Ingram is wearing black and seated cross legged posing in front of the space needle with her athleisure clothing brand ShapeShareWear on." />
            </div>
            <div className="politics-section">
                <h1>Amiya Ingram for King County Executive: Resilience to Revolution</h1>
                <image src={PinkSuitImage} alt="Amiya Ingram is wearing a pink suit, formal white shirt, and seated in a power pose with arms crossed." />
            </div>
            <div className="signup-wrapper">
                <header>
                    <h3>Sign up with your email address to receive news and updates.</h3>
                </header>
                <form>
                    <input type="email" placeholder="Email Adddress" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
      </div>
    );
  }
  
export default HomePage; 