import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import cardData from "./CardData";
import Footer from "./Components/Footer";

function App() {
  const [searchKey, setSearchkey] = useState("");
  const [filteredArr, setFilteredArr] = useState([]);
  const [cartData, setCartData] = useState([])


  const addProductToCart = (newData) => {
    setCartData([
      ...cartData,
      newData
    ])
  }

  const removeProductToCart = (elem) => {
    const filtered = cartData.filter(e => e.id !== elem.id);
    setCartData(filtered)
  }
  // console.log('cartData', cartData)


  // calling filterdArr function with dependency searchKey
  useEffect(() => {
    filterArr();
  }, [searchKey]);

  // filtering array accoring to searchKey and setting the value of filteredArr
  const filterArr = () => {
    if (searchKey !== "") {
      const newArr = cardData.filter((v) => {
        return v.title.toLowerCase().includes(searchKey.toLowerCase());
      });
      setFilteredArr(newArr);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header cartData={cartData} />
        <Search setSearchkey={setSearchkey} />
        <Routes>
          <Route path="/" element={<Home filteredArr={filteredArr} searchKey={searchKey} addProductToCart={addProductToCart} />} exact />
          <Route path="/cart" element={<Cart cartData={cartData} removeProductToCart={removeProductToCart} />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
