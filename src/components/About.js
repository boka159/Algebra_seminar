import React from "react";
import "./About.css";
import location_icon from "../icons/location_128.png";
import phone_icon from "../icons/phone_128.png";
import mail_icon from "../icons/mail_128.png";

const About = () => {
    return <div className="main-container">
        <div className="card-container">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img src={location_icon} />
                        <h3>Location</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <div className="google-map-code">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="300" height="190" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img src={mail_icon} />
                        <h3>E-mail</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>
                            For any business proposals, get in touch via e-mail: <a href="mailto:business.info@gmail.com" method="get" enctype="text/plain">business.info@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <img src={phone_icon} />
                        <h3>Phone</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>If you have any inquiries regarding our application, feel free to call our customer service during working hours. <br />
                            Monday to Friday: 6 AM to 10 PM
                        </p>
                        Phone number: <a href="+0800 0101">0800 0101</a>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <p style={{ textAlign: "center", paddingTop: 20 }}>Algebra chat app © 2023 </p>
        </footer>
    </div >

}
export default About;