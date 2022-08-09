import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import './style.css'

import imageBackground from '../../assets/images/image-hero.jpg'

export function Contact() {
    return (
        <div className="contact-container">
            <header>
                <Header />
            </header>
            <main className="contact-main-container">
                
            <section className="contact-container-team">
                    <div className="image-content">
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
                <section className="contact-container-details">
                    <h4>Contact Details</h4>
                    <div className="contact-collections">
                        <div className="contact-item">
                            <p>Main Office</p>
                            <div className="contact-item-spec">
                                <p>Mail:</p>
                                <span>archone@mail.com</span>
                            </div>
                            <button>View on Map</button>
                        </div>
                        <div className="contact-item">
                            <p>Main Office</p>
                            <div className="contact-item-spec">
                                <p>Mail:</p>
                                <span>archtwo@mail.com</span>
                            </div>
                            <button>View on Map</button>
                        </div>
                    </div>
                </section>
                <section className="contact-container-connect">
                    <p>Connect with us</p>
                    <div>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <button>Contact</button>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}