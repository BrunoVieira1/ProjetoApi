import Product from "../screens/product";
import ProductEntry from "../screens/productEntry";
import ProductOutput from "../screens/productOutput";

function ContentScreen() {
  return (
    <>
      <div className="teste">
        <h1>TESTE</h1>
      </div>
      <div className="productScreen all">
        <Product />
      </div>
      <div className="productEntry all">
        <ProductEntry />
      </div>
      <div className="productOutput all">
        <ProductOutput />
      </div>
    </>
  );
}

export { ContentScreen };
