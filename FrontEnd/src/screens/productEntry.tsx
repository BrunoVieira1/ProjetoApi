import CloseScreen from "../button/closeScreen";
import ModalAdd from "../components/modalAdd";
import { ModalFunction } from "../components/modalFunction";

function ProductEntry() {
  return (
    <>
      <div className="nav-content">
        <div className="flex ">
          <input
            type="text"
            placeholder="Buscar por nome:"
            style={{
              color: "black",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          />
          <h2>ENTRADA DE PRODUTOS </h2>
          <button onClick={() => ModalFunction(2)} className="btn-add">
            <ModalAdd />
          </button>
        </div>
        <CloseScreen />
      </div>

      <div className="container">
        <div className="product-span">
          <span className="product">ID</span>
          <span className="product">ID-PRODUTO</span>
          <span className="product">QUANTIDADE</span>
          <span className="product">VALOR UNITÁRIO</span>
          <span className="product">DATA DE ENTRADA</span>
        </div>
      </div>
    </>
  );
}

export default ProductEntry;
