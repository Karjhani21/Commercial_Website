import { Link } from "react-router-dom";
import "../css/product-card.css";

function ProductCard(props) {
  console.log(props);
  return (
    <div class="product-card">
      <Link to={`/product/${props.id}`} className="product-link">
        <span class="product-badge">New</span>

        <div class="favorite">❤</div>

        <div class="product-image">
          <img src={props.photo[0]} alt={props.title} />
        </div>

        <div class="product-content">
          <h3 class="product-title">{props.title}</h3>

          <p class="product-description">{props.desc}</p>

          <div class="product-price">{props.price}</div>
          <div class="product-brand">{props.brand}</div>

          <button class="product-btn">Add to Cart</button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
