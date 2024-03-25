import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import MainTitle from "./Components/MainTitle";
import Categories from "./Components/Categories";
import CardItem from "./Components/CardItem";
import { useState } from "react";
import { items } from "./api/data";

function App() {
  const [itemData, setItemData] = useState(items);

  //  !get all categories from  the data

  const allCategories = ["الكل", ...new Set(items.map((i) => i.category))];
  // ! Filter by category

  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemData(items);
    } else {
      const newArray = items.filter((item) => item.category === cat);
      setItemData(newArray);
    }
  };
  // ! Filter by search in form
  const filterBySearch = (word) => {
    if (word !== " ") {
      const newArray = items.filter((item) => item.title === word);
      setItemData(newArray);
    }
  };

  return (
    <div className="font color-body">
      <Header filterBySearch={filterBySearch} />
      <Container>
        <MainTitle />
        <Categories
          filterByCategory={filterByCategory}
          allCategories={allCategories}
        />
        <CardItem itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;
