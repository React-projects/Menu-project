import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import MainTitle from "./Components/MainTitle";

function App() {
  return (
    <div className="font color-body">
        <Header/>
      <Container>
        <MainTitle/>
        
      </Container>
      
    </div>
  );
}

export default App;
