import { React, useState, useEffect } from 'react';
import '../InputForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Row, Col, Card } from 'react-bootstrap'

function InputForm() {
    
    const [a,setA] = useState()
    const [b,setB] = useState(0)
    const [sum, setSum] = useState(0);
  
    useEffect(() => {},[]);
  
    const handleSubmit = (event) => {
  
      fetch('/time', {
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: a, b: b})
        }).then(res => res.json()).then(data => {
          setSum(data)
          event.preventDefault();
        },[]);
  }
    return (
      <div>
      <Card style = {{ width: "40vw"}}>
        <Card.Header className = "cardtitle ">Input/Output</Card.Header>
        <Card.Body>
          <Form  className = "text-center">
            <Col className="justify-content-center">
              <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label id='apple' column xs>
                    chunk :
                  </Form.Label >
                  <Form.Control placeholder="[2, 4] or ['raheem.jpeg']" style = {{ width: "100%"}} 
                  type="number" name = 'a' value={a} onChange={e => setA(+e.target.value)}/>

              </Form.Group>
            </Col>

            <Col className="justify-content-center">
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label id="orange" column xs>
                  key:
                </Form.Label>
                  <Form.Control placeholder="sum(), max() or open() " style = {{ width: "100%"}}
                  type="number" name = 'b' value={b} onChange={e => setB(+e.target.value)} />
              </Form.Group>
            </Col>

            <Form.Group as={Row} >
              <Col sm={{ span: 12}}>
                <Button onClick={handleSubmit}>Submit</Button>
              </Col>
            </Form.Group>
            
            <Form.Group className = "answer" as={Row} >
              <Col sm={{ span: 12}}>
                <Card>
                <Card.Header></Card.Header>
                <Card.Body>
                    {sum}
                </Card.Body>   
                </Card>
              </Col>
            </Form.Group>

          </Form>
        </Card.Body>
      </Card>
      </div>
    );
}
export default InputForm;
