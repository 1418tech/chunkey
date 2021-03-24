
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Documentation.css'
import { Jumbotron,Button } from "react-bootstrap";

function Documentation() {
  return (
    <div className="Documentation">
    <header className = "Documentation-header">
      <Jumbotron id = "jt">
        <h1>Documentation</h1>
        <p>
        Below check out how to use all of the task function calls that Chunkey can execute!
        </p>
        <br></br>
        <h3 id='tit'>addnumbers()</h3>
        <h6>Calculate the sum of a list of numbers</h6>
        <h6>Input : [1, -2.0, 4.2]</h6>
        <h6>Output : 3.2 </h6>
        <h3 id='tit'>openwebpage()</h3>
        <h6>Open webpage in new tab on current browser</h6>
        <h6>Input : google.com</h6>
        <h6>Ouput : <em id ='sm'>Action success/failure message</em></h6>
      </Jumbotron>
    </header>
  </div>
  );
}

export default Documentation;