import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import MainTitle from "./Components/MainTitle";
import Categories from "./Components/Categories";
import CardItem from "./Components/CardItem";

function App() {
  return (
    <div className="font color-body">
        <Header/>
      <Container>
        <MainTitle/>
        <Categories/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        
      </Container>
      
    </div>
  );
}

export default App;
