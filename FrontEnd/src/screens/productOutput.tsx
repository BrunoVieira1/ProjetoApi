/* import { fecharTela } from "../showScreens"; */
import CloseScreen from "../button/closeScreen";
import { ModalAdd } from "../components/modalAddUser";

function ProductOutput() {
  return (
    <>
      <div className="nav-content">
        <div className="flex ">
          <h2>SAÍDA DE PRODUTOS </h2>
          <input
            type="text"
            placeholder="Buscar por nome:"
            style={{
              color: "black",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          />
          <span className="btn-add">
            <ModalAdd />
          </span>
        </div>
        <CloseIcon />
      </div>

      <div className="container">
        <div className="product-span">
          <span className="product">ID</span>
          <span className="product">ID-PRODUTO</span>
          <span className="product">QUANTIDADE</span>
          <span className="product">VALOR UNITÁRIO</span>
          <span className="product">DATA DE SAÍDA</span>
        </div>
      </div>
    </>
  );
}

export default ProductOutput;
