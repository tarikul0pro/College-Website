import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className=" about mt-3">

            <div className="row d-flex">
                <div className="col">
                    <img src="https://stylemixthemes.com/masterstudy/ms/wp-content/uploads/sites/4/2015/06/Fotolia_82779341_Subscription_Monthly_M1-1170x500.jpg" alt="" />
                </div>
                <div className="col mt-3">
                    <h1 className="text-secen"> WE SEE TOP 5 MERITORIOUS STUDENT</h1>
                    <p>Cras condimentum a elit eget sagittis. Ut dignissim sapien feugiat purus tristique, vitae aliquet arcu tempor. Nulla facilisi. Integer maximus mi non nulla posuere consectetur. Phasellus erat lectus, ullamcorper nec erat vel, hendrerit hendrerit urna. </p>
                </div>
            </div>
        </div>
    );
};

export default About;
