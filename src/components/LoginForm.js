import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../InputForm.css'
import Autocomplete from 'react-autocomplete'
import CreateAccount from './CreateAccount'

import { Button, Form, Row, Col, Card} from 'react-bootstrap'
function LoginForm() {
    
    const [a,setA] = useState("")
    const [b,setB] = useState("")
    const [result, setResult] = useState("");
    const [value,setValue] = useState("") 

    useEffect(() => {},[]);
  
    const handleSubmit2 = (event) => {
            fetch('/create_user', {
              method : 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({'username': a, 'password': b})
              }).then(res => res.json()).then(data => {
                setResult(data)
                console.log("User added!")
                console.log(result)
                event.preventDefault();
              },[]);
    }

    return (
      <div>
      <Card style = {{ width: "60vw"}}>
        <Card.Body>
          <Form  className = "text-center">
            <Col className="justify-content-center">
              <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label id='apple' column xs>
                    Username :
                  </Form.Label >
                  <Form.Control style = {{ width: "100%"}} 
                   name = 'a' onChange={event=> setA(event.target.value)}/>

              </Form.Group>
            </Col>
            <Col className="justify-content-center">
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label id="orange" column xs>
                  Password :
                </Form.Label>
                <Form.Control style = {{ width: "100%"}} 
                   name = 'b' type="password" onChange={event=> setB(event.target.value)}/>
              </Form.Group>
            </Col>
            <Form.Group as={Row} >
              <Col sm={{ span: 12}}>
                <Button id="but" >Submit</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} >
            <Col sm={{ span: 12}}>
              <a href="https://www.w3schools.com">Forgot password?</a>
            </Col>
            </Form.Group>           
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Col className="justify-content-center" sm={{ span: 12}}>
            <Button id = "create" onClick ={handleSubmit2}>Create New Account</Button>  
          </Col>
        </Card.Footer>
      </Card>
      </div>
    );
}
export default LoginForm;
