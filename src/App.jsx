import  { useEffect, useState } from 'react';
import SideBarSection from './Components/sideBarSection/SideBarSection';
import NavBar from './Components/Navigation/Nav';
import ProductSection from './Components/ProductSection/ProductSection';
import data from './db/data';
import Card from './Components/Customize/Card/Card';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterSelected = (query, selected, data) => {
      let filterProduct = data;
      if (query) {
        filterProduct = filterProduct.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
      }
      if (selected) {
        filterProduct = filterProduct.filter(
          ({ title, newPrice, company, color, category }) =>
            title === selected ||
            newPrice === selected ||
            company === selected ||
            color === selected ||
            category === selected
        );
      }
      return filterProduct;
    };

    const result = filterSelected(query, selectedCategory, data);
    setFilteredData(result);
  }, [query, selectedCategory]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleRecommend = (compony) => {
    setSelectedCategory(compony);
  };

  const handleSidebar=(event)=>{
      setSelectedCategory(event.target.value);
  }

  return (
    <div className="bg-gray-100/50 overflow-x-hidden w-screen h-screen">
      <SideBarSection handleSidebar={handleSidebar} />
      <div className="float-right">
        <NavBar handleInputChange={handleInputChange} Query={query} />
        <ProductSection
          result={filteredData.map((product, index) => (
            <Card
              key={index}
              img={product.img}
              title={product.title}
              star={product.star}
              reviews={product.reviews}
              prevPrice={product.prevPrice}
              newPrice={product.newPrice}
            />
          ))}
          handleRecommend={handleRecommend}
        />
      </div>
    </div>
  );
};

export default App;
