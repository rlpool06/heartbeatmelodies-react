import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';


class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            fileUpload: '',
            heartrate: '',
            feedback: '',
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    
        handleInputChange(event) {
            const target = event.target;
            const name = target.name;
            const value = target.type ==='checkbox' ? target.checked : target.value;

        this.setState({[name]: value});
        }
    
        handleSubmit(event) {
            console.log('Current state is: ' + JSON.stringify(this.state));
            alert('Current state is: ' + JSON.stringify(this.state));
            event.preventDefault();
        }
    
        render() {
        return (    
            <div className="row">
                <div className="col-md-10">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstName" name="firstName"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastName" name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange} />
                            </Col>                        
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="phoneNum" md={2}>Phone</Label>
                            <Col md={10}>
                                <Input type="tel" id="phoneNum" name="phoneNum"
                                    placeholder="Phone number"
                                    value={this.state.phoneNum}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 4, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"
                                            name="agree"
                                            checked={this.state.agree}
                                            onChange={this.handleInputChange} /> {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                    <option>By Phone</option>
                                    <option>By Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="file" md={2}>Upload audio file here:</Label>
                            <Col md={10}>
                                <Input type="file" name="file" id="exampleFile" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="feedback" md={2}>Baby's Heart Rate</Label>
                            <Col xs={3}>
                                <Input type="text" name="feedback" id="feedback" placeholder="Ex. 142bpm" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="feedback" name="feedback"
                                    placeholder="We draw inspiration from every bit of information you can give us.  Let us know your baby's name, your hopes and dreams for your child, even music that is special to you.  Any little detail helps!"
                                    rows="12"
                                    value={this.state.feedback}
                                    onChange={this.handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>   
        );
        }
    }

export default OrderForm;