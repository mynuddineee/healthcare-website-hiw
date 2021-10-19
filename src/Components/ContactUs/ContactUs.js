import React from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div id ="contactUs">
            <h2>If you have any query or suggestions, please contact with us</h2>
           <Form >
           <Row className="mx-4">
                   <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label column sm="2">Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                   </Col>
               </Row>
               <Row className="mx-4">
                   <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label column sm="2">Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                   </Col>
               </Row>
               <Row className="mx-4">
                   <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label column sm="2">Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                   </Col>
               </Row>
                <Row className="mx-4">
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label column sm="2">Write your comments</Form.Label>
                        <Form.Control as="textarea" rows={3} cols={2} />
                </Form.Group>
                    </Col>
                </Row>
                
                <Form.Group className="mb-3 ">
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </div>
    );
};

export default ContactUs;