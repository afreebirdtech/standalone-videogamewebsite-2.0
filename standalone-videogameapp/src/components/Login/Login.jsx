import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

// Our component for handling login
class Login extends React.Component {
// We use Ref to integrate with React bootstrap
    constructor(props) {
        super(props);
        this.email = React.createRef()
        this.state = {
            email: ''
        }
    }
   

    handleChange = (event) => {
    // We look for a change in event when entering password and email
        this.setState({
            email: this.email.current.value
        })
    }

    render = () => {
        return (
            <div className='form-container'>
                <Form className='formbox' onSubmit={(event) => this.props.handleEmailSubmit(event,  this.state.email)}>
                    <Form.Group as={Row} controlId='formBasicEmail'>
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type='email' placeholder="Enter your email" ref={this.email} onChange={(e) => this.handleChange(e)} value={this.state.email}/>
                        </Col>
                    </Form.Group>
                    {/*
                        Removed password function cause why not
                    <Form.Group as={Row} controlId='formBasicPassword'>
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type='password' placeholder='Password' ref={this.password} value={this.state.password} onChange={(e) => this.handleChange(e)} />
                        </Col>
                        <Col sm={0}>
                            <Form.Text className='text-muted'>
                                Please dont'share your password!
                            </Form.Text>
                        </Col>
                    </Form.Group> */}
                    <Col sm={12}>
                        <Button variant='primary' type='submit'>
                            Submit
                        </Button>
                    </Col>
                </Form>
            </div>
        )
    }
}

export default Login;