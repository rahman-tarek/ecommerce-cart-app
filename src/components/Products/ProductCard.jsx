import { BsBag } from "react-icons/bs";
import "./Products.css";

const ProductCard = ({ product }, addCart, setAddCart) => {
  console.log(product)
  const { id, title, img, rating, reviews, prevPrice, newPrice } = product;
  console.log(id, title, img, thumbnail, rating, reviews, prevPrice, newPrice);

  // Handle Add New Cart
  const handleAddCart = (id) => {
    setAddCart(addCart + 1);
    console.log(addCart);
  };

  return (
    <div>
      <div className="products-card" key={id}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <div className="rating">
          <span>⭐⭐⭐⭐</span>
          {/* <span>({reviews})</span> */}
        </div>
        <div className="buttonBottom">
          <div className="price">
            <del>{newPrice}</del>
            <span>{newPrice}</span>
          </div>
          <BsBag className="bag-icon" size={20} onClick={handleAddCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
