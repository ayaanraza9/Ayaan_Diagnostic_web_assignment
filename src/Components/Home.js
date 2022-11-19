import Carousel from "./Carousel";
import CardContainer from "./CardContainer";
import Footer from "./Footer";

const Home = ({ filteredArr, searchKey, addProductToCart }) => {

  return (
    <>
      <Carousel />
      <CardContainer filteredArr={filteredArr} searchKey={searchKey} addProductToCart={addProductToCart} />

    </>
  );
};

export default Home;
