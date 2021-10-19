import React, { useEffect, useState } from 'react';
import Department from '../Department/Department';
import './Departments.css';

const Departments = () => {
    const[departments, setDepartments] = useState([]);

    useEffect(()=>{

        fetch('./departments.JSON')
        .then(res => res.json())
        .then (data => setDepartments(data))


    },[])
    return (
        <div className="my-4" id="departments">
           <h1>Our Departments</h1> 
           <div className="container">
                {
                    departments.map(department => 
                        <Department
                                key ={department.id}
                                department={department}

                        >

                        </Department>
                    )
                }
           </div>
        </div>
    );
};

export default Departments;