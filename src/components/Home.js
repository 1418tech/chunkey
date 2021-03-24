import { Container,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputForm from './InputForm';

function Home() {
  return (
    <div className="Home">
      <header className = "App-header">
        <h1 className = 'main-header'>CHUNKEY</h1>
        <h3 className = "sub-header">[Robust web personal assistant]</h3>
        <h5 className = "sub-sub-header">Complete all your tasks in one place</h5>
        <Container id = "meat">
          <InputForm></InputForm>
          <br></br>  
        </Container>
      </header>
    </div>
  );
}

export default Home;
