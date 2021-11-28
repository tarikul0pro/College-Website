import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css';
const Home = () => {

const [educations,setEducation]=useState([])


    useEffect(() => {
        fetch('./Education.JSON')
            .then(res => res.json())
        .then(data=>setEducation(data))
    },[])

console.log(educations);
    return (
        
        <div className="container">
            <h1 className="TEXT">Worlds Top 4 University</h1>
            <div className="mt-3">
                <div className="educations">
                    <div className="row">
                        {
                            educations.slice(0,4).map((education) => (<div className="col-md-4">
                                <div className="cart">
                                    <div className="logo-img">
                                        <img className="w-75" src={education.img} alt="" />
                                    </div>
                                    <h2>Address:{education.address}</h2>
                                    <h4>Phone:{education.phone}</h4>
                                    <h5>Acceptancerate:{education.acceptancerate}</h5>
                                    <p>Founded:{education.founded}</p>
                                    <p>Totalenrollment:{education.totalenrollment}</p>
                                    <div className="btn btn btn-info button">show Details</div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
