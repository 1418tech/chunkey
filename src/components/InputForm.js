import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../InputForm.css'
import Autocomplete from 'react-autocomplete'

import { Button, Form, Row, Col, Card} from 'react-bootstrap'
function InputForm() {
    
    const [a,setA] = useState("")
    const [b,setB] = useState("")
    const [result, setResult] = useState("");
    const [value,setValue] = useState("") 

    useEffect(() => {},[]);
  
    const handleSubmit = (event) => {

      switch (b) {
        case "addnumbers()":
          fetch('/add_nums', {
            method : 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'a': a, 'b': b})
            }).then(res => res.json()).then(data => {
              setResult(data)
              event.preventDefault();
            },[]);
            break
        case "openwebpage()":
          fetch('/open_webpage', {
            method : 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({'a': a, 'b': b})
            }).then(res => res.json()).then(data => {
              setResult(data)
              event.preventDefault();
            },[]);
            break
        default:
            console.log("Nada")
      } 
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
                   name = 'a' onChange={event=> setA(event.target.value)}/>

              </Form.Group>
            </Col>

            <Col className="justify-content-center">
              <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label id="orange" column xs>
                  key:
                </Form.Label>
                        <div style = {{ width: '100%'}} name = 'b'>
                          <Autocomplete
                            id = 'jaja'
                            inputProps={{ style: { width: '100%',height: 'calc(1.5em + .75rem + 2px)'}, 
                            placeholder: 'addnumbers() or print()',
                          }}  
                            wrapperStyle={{ width:'100%'}}
                            menuStyle = {{ width: "100%", color: 'black'}}
                            type="text" name = 'b' 
                            getItemValue={(item) => item.label}
                            
                            items={
                              value.length<1 ? []:[
                              { id: 'addnumbers()', label: 'addnumbers()' },
                              { id: 'openwebpage()', label: 'openwebpage()' },
                              { id: 'banana', label: 'banana' },
                              ]
                            }
                            shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                            renderItem={(item, isHighlighted) =>
                            <div 
                            key={item.id}
                            style={{                            
                              background: isHighlighted ? 'lightgray' : 'white', 
                              }}>
                              {item.label}
                            </div>
                            }
                            value = {value}
                            onSelect={value  => { setB(value); setValue(value) }}
                            onChange={(e) => setValue(e.target.value)}
                        />
                      </div>
                  <br></br>
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
                    {result}
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
