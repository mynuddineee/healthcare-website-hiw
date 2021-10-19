import React from 'react';
import { NavLink } from 'react-router-dom';
import'./Doctor.css';

const Doctor = ({doctor}) => {
    const {id,img, name, designation, specialization, degree} = doctor;
    return (
        <div>
            <div className="container-fluid">
                <div className="row g-4">
                        <div className="col my-4">
                            <div className="card">
                            <img src={img} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Doctors name: {name}</h5>
                                <h6 className="card-text">Rank: {designation}</h6>
                                <p className="card-text">Degree: {degree}</p>
                                <p className="card-text">Specialization: {specialization}</p>
                                <br/>
                                <NavLink to={`/doctorDetails/${id}`}

                                
                                >
                                    <button className="btn btn-primary "type="">Book an Appointment</button>
                                </NavLink>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Doctor;