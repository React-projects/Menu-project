import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import MainTitle from "./Components/MainTitle";
import Categories from "./Components/Categories";

function App() {
  return (
    <div className="font color-body">
        <Header/>
      <Container>
        <MainTitle/>
        <Categories/>
        
      </Container>
      
    </div>
  );
}

export default App;
