import Product from "../screens/product";
import ProductEntry from "../screens/productEntry";
import ProductOutput from "../screens/productOutput";
import Functionary from "../screens/functionary";

function ContentScreen() {
  return (
    <>
      <div className="teste">
        <h1
          style={{
            fontSize: 100,
          }}
        >
          HOME
        </h1>
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
      <div className="functionary all">
        <Functionary />
      </div>
    </>
  );
}

export { ContentScreen };
