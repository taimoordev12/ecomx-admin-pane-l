
import React from "react";
import { Redirect } from "react-router-dom";


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

class Login extends React.Component {
  constructor(){
    super();
  this.state={
      email: '',
      password: '',
      FakeLogin: false

  }

}
HandleChange = event => {
  const {name, value} = event.target;
  this.setState({[name]:value});
}
Submit=()=>
{ 
  this.setState({FakeLogin :true});
}

  render() {
    if (this.state.email=='admin' && this.state.password == 'admin' && this.state.FakeLogin == true ) {
      return   <Redirect from="*" to="/admin/index" />

  }
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
           
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign In with your credentials</small>
              </div>
              <Form role="form" >
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />  
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="email" placeholder="Email" type="email" autoComplete="new-email" onChange={this.HandleChange} value={this.state.email} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name="password" placeholder="Password" type="password" autoComplete="new-password" onChange={this.HandleChange} value={this.state.password}  />
                    
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={ this.Submit } >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
            
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default Login;
