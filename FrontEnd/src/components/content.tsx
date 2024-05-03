import "../styles/content.css";
import { fecharTela } from "./mostrarTelas";
import CloseIcon from "@mui/icons-material/Close";

function Content() {
  return (
    <>
      <div className="nav-content">
        <div className="flex ">
          <h2>PRODUTOS </h2>
          <input
            type="text"
            placeholder="Buscar por nome:"
            style={{
              color: "black",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          />
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
          <span className="product">NOME</span>
          <span className="product">QUANTIDADE</span>
          <span className="product">PREÇO</span>
        </div>
      </div>
    </>
  );
}

export default Content;
