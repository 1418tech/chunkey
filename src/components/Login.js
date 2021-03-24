import 'bootstrap/dist/css/bootstrap.min.css'
import '../Login.css'
import { Button, Form, Row, Col, Card,Container} from 'react-bootstrap'
import LoginForm from './LoginForm';

function Login() { 
  
  const handleSubmit = (event) => {
  }

  return (
    <div className="Login">
      <header className = "Login-header">
        <h1 id = "bigheader">Login</h1>
        <Container id = "veggies">
          <LoginForm></LoginForm>
          <br></br>  
        </Container>
      </header>
    </div>
  );
}

export default Login;
