import { BsBag } from "react-icons/bs";
import "./Products.css";

const ProductCard = ({ product }, addCart, setAddCart) => {
  console.log(product)
  const { id, title, image, price, rating } = product;
  console.log(title)


  // Handle Add New Cart
  const handleAddCart = (id) => {

  };

  return (
    <div>
      <div className="products-card" key={id}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <div className="rating">
          <span>⭐⭐⭐⭐</span>
          {/* <span>({reviews})</span> */}
        </div>
        <div className="buttonBottom">
          <div className="price">
            <del>{price + 10}</del>
            <span>{price}</span>
          </div>
          <BsBag className="bag-icon" size={20} onClick={handleAddCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
