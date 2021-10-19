import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import './DoctorDetails.css';


const DoctorDetails = () => {
    
    let { doctorId } = useParams();
    const [doctorDetail, setDoctorDetail] = useState([]);
    const [singleDoctor, setSingleDoctor] = useState({});
    useEffect(() =>{

        fetch("/details.json")
        // const url = `https://jsonplaceholder.typicode.com/users/${doctorId}`
        // fetch(url)
        .then((res) => res.json())
        .then((data) => setDoctorDetail(data.detail));
       

    },[]);

    
    useEffect(() =>{

        const desiredDoctor = doctorDetail.find((detail) => detail.info.id === doctorId);

        console.log(desiredDoctor);
        setSingleDoctor(desiredDoctor);

    },[doctorDetail]);

    
    return (
        <div className="my-4 ">
            <h3 className="text-primary">Doctor Id:{doctorId}</h3>
            <h3 className="text-primary pb-4">Doctor Name: {singleDoctor?.name}</h3>
      <Container>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={singleDoctor?.img} />
            </Card>
          </Col>
          <Col md={5}>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title>{singleDoctor?.name}</Card.Title>
                <Card.Text>
                     <b> Rank : {singleDoctor?.designation}</b><br/>
                     <b> Degree : {singleDoctor?.degree}</b><br/>
                     <b> Medical College : {singleDoctor?.info?.medicalCollege}</b><br/>
                     <b> Chamber : {singleDoctor?.info?.chamberAddress}</b><br/>
                     <b> Appointment : {singleDoctor?.info?.appointment}</b><br/>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
        </div>
    );
};

export default DoctorDetails;