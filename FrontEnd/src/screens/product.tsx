import "../styles/screens.css";
import CloseScreen from "../button/closeScreen";
import ModalAdd from "../components/modalAddUser";

function Product() {
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
          <span className="btn-add">
            <ModalAdd />
          </span>
        </div>

        <CloseScreen />
      </div>

      <div className="container">
        <div className="product-span">
          <span className="product">ID</span>
          <span className="product">NOME</span>
          <span className="product">MARCA</span>
          <span className="product">DESCRIÇÃO</span>
        </div>
      </div>
    </>
  );
}

export default Product;
