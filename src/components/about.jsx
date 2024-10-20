import { useState, useEffect } from 'react';
import axios from 'axios';
import SlideInText from "../others/SlideInText.jsx";
import { Link } from 'react-router-dom';
import Dp from "../others/dp.jsx";

const About = () => {
    const [aboutDescription, setAboutDescription] = useState('');
    const URL = import.meta.env.VITE_API_BASE_URL;


    useEffect(() => {
        axios.get(`${URL}/about`)
            .then((response) => {
                setAboutDescription(response.data.about);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [URL]); // Added URL to dependencies

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="left-side">
                    <h2 className="section-title text-warning">
                        Hi, I&apos;m <span className="name">Mezbaur Are Rafi</span>
                    </h2>
                    <h3 className="description-title">MERN Stack Developer</h3>
                    <SlideInText />
                    <div className="contact-button-container">
                        <Link to="/contact" className="btn btn-contact">Contact Me</Link>
                    </div>
                </div>
                <div className="right-side">
                    <Dp />
                </div>
            </div>

            <section id="about-details" className="about-details-section">
                <div className="container">
                    <h2 className="section-title text-warning">About Me</h2>
                    <div
                        className="section-description text-light"
                        dangerouslySetInnerHTML={{ __html: aboutDescription }}
                    />
                </div>
            </section>
        </section>
    );
};

export default About;