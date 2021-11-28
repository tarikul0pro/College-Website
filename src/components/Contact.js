import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row,Image } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="container mt-5 contact">
          
                
            <div className="images mt-3">
                <Col xs={6} md={4}>
                    <Image className="w-100" src="https://cdn.pixabay.com/photo/2017/09/08/00/37/friend-2727305__340.jpg" rounded />
                </Col>
                <Col xs={6} md={4}>
                    <Image className="w-100" src="https://cdn.pixabay.com/photo/2016/10/06/03/34/teen-1718115_960_720.jpg" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                    <Image className="w-100" src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg" rounded />
                </Col>
            </div>

                
           
            <h1 className="text">Dear Student Please Submit Your Data</h1>
            <Form className="form">
               
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>University Id</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>


                <div className="btn btn btn-danger mb-3 px-5 py-3 button">Send Message</div>
            </Form>
        </div>
    );
};

export default Contact;