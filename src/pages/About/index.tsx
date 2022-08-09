import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import backgroundImage from '../../assets/about/desktop/image-hero.jpg'

import './style.css'
import { Avatar } from "../../components/Avatar";

import jake from '../../assets/about/desktop/avatar-jake.jpg'
import jackson from '../../assets/about/desktop/avatar-jackson.jpg'
import maria from '../../assets/about/desktop/avatar-maria.jpg'
import thompson from '../../assets/about/desktop/avatar-thompson.jpg'

export function About() {
    
    return (
        <div className="about-container">
            <header>
                <Header />
            </header>
            <main className="about-main-container">
                <section className="about-container-team">
                    <div className="image-content">
                        <img src={backgroundImage} alt="" />
                    </div>
                    <div className="text-content">
                        <div className="title-content">
                            <h1>About</h1>
                        </div>
                        <div className="sub-text-content">
                            <h4>You team of professinals</h4>
                            <p> Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
                        </div>
                    </div>
                </section>
                <section className="about-container-heritage">
                    
                    <div className="text-content">
                        <h5>Our Heritage</h5>
                        <p>
                        Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.
                        </p>
                        <p>Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. </p>
                        <p>Our small team of world-class professionals provides input on every project.</p>
                    </div>
                    <div className="image-content">
                    </div>
                </section>
                <section className="about-container-leaders">
                    <h5>The Leaders</h5>
                    <div className="leader-collections">
                        <Avatar avatar={jake} name="Jake Richards" job="Chief Architect"/>
                        <Avatar avatar={thompson} name="Thompson Smith" job="Head of Finance"/>
                        <Avatar avatar={jackson} name="Jackson Rourke" job="Lead Designer"/>
                        <Avatar avatar={maria} name="Maria Simpson" job="Senior Architect"/>
                    </div>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}