import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './Login.css'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.email = React.createRef()
        this.password = React.createRef()
        this.state = {
            email: '',
            password: ''
        }
    }
   

    handleChange = (event) => {
        this.setState({
            email: this.email.current.value,
            password: this.password.current.value
        })
    }

    render = () => {
        return (
            <div className='form-container'>
                <Form className='formbox' onSubmit={(event) => this.props.handleLoginSubmit(event, this.state.password, this.state.email)}>
                    <Form.Group as={Row} controlId='formBasicEmail'>
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type='email' placeholder="Enter your email" ref={this.email} onChange={(e) => this.handleChange(e)} value={this.state.email}/>
                        </Col>
                    </Form.Group>
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
                    </Form.Group>
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