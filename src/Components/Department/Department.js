import React from 'react';
import './Department.css';

const Department = ({department}) => {

    const {img, name, description} = department;
    return (
        <div>

            <div className="container-fluid">
                <div className="row g-4">
                        <div className="col my-4">
                            <div className="card">
                                <img src={img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Department: {name}</h5>
                                    <h6 className="card-text"> {description}</h6>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Department;