import React from 'react';
import Departments from '../Departments/Departments';
import Doctors from '../Doctors/Doctors';

import Service from '../Service/Service';
import Banner from './Banner/Banner';

import './Home.css';


const Home = () => {
    return (
       <div>
           
           <Banner></Banner>
           <Doctors></Doctors>
           <Departments></Departments>
           <Service></Service>
           
       </div>
    );
};

export default Home;