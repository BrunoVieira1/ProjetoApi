import { fecharTela } from "./showScreens";
import CloseIcon from "@mui/icons-material/Close";
import { ModalAdd } from "./modalAddUser";

function ProductEntry() {
  return (
    <>
      <div className="nav-content">
        <div className="flex ">
          <h2>ENTRADA DE PRODUTOS </h2>
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

        <span
          style={{ padding: "4px" }}
          className="CloseIcon"
          onClick={() => fecharTela("content")}
        >
          <CloseIcon />
        </span>
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
