import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import'./Doctors.css';

const Doctors = () => {
    const[doctors, setDoctors] = useState([]);
    useEffect( () => {

        fetch('./doctors.JSON')
            .then(res => res.json()) 
            .then(data =>setDoctors(data))




    },[])
    return (
        <div className="mt-4 doctors-container">
            <h1>Our Doctors</h1>
            <div className="container">
                {
                    doctors.map(doctor => <Doctor
                    
                        key ={doctor.id}
                        doctor={doctor}
                    
                    >

                    </Doctor>)
                }
            </div>

        </div>
    );
};

export default Doctors;