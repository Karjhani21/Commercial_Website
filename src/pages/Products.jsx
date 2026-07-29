import ProductCard from "./ProductCard";
import "../css/products.css";
import products from "../data/products";

function Products() {
 
  console.log("Products component rendered");
  console.log(products.products);

  products.products.map((item) => {
    console.log(item + " is available in our store.");
  });

  return (
    <div className="products-container">
      {products.products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.description}
            photo={item.images}
            brand={item.brand}
            category={item.category}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default Products;
