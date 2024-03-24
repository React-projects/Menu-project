import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import MainTitle from "./Components/MainTitle";
import Categories from "./Components/Categories";
import CardItem from "./Components/CardItem";
import { useState } from "react";
import { items } from "./api/data";

function App() {
  const [itemData, setItemData] = useState(items);
  // ! Filter by category

  const filterByCategory = (cat) => {

    if(cat ==='الكل'){
      setItemData(items)
    }else{
      const newArray = items.filter((item) => item.category === cat);
      setItemData(newArray);

    }
  };
  return (
    <div className="font color-body">
      <Header />
      <Container>
        <MainTitle />
        <Categories filterByCategory={filterByCategory} />
        <CardItem itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;
