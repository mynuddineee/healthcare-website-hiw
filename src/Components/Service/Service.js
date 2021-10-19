import React from 'react';
import './Service.css';
import service1 from '../../images/service-1.png'
import service2 from '../../images/service-2.png'
import service3 from '../../images/service-3.png'


const Service = () => {
    return (
        <div >
            <div className="service-top mb-4">
                <div className="container-fluid">
                        <div className="row ">
                            <h1>Testimonials</h1>
                            <div className="col-xl-4 col-md-4">
                                
                                <div className="single_service">
                                        <div>
                                            <img src={service1} className="img-responsive2"  alt=""/>
                                        </div>
                                    
                                        <h3>BMDC Registered Physicians</h3>
                                        <h3>Total: 2500</h3>
                            
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <div className="single_service">
                                        <div>
                                            <img src={service2} className="img-responsive2" alt=""/>
                                        </div>
                                        <h3>Patients as user</h3>
                                        <h3>Total: 5200</h3>                    
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-4">
                                    <div className="single_service">
                                        <div>
                                            <img src={service3} className="img-responsive1" alt=""/>
                                        </div>
                                        <h3>Sessions Completed Till Now</h3>
                                        <h3>Total: 3500</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default Service;