import "../styles/screens.css";
import CloseScreen from "../button/closeScreen";
import ModalAdd from "../components/modalAdd";
import { ModalFunction } from "../components/modalFunction";
import { Api } from "../services/api/axios-config";
import { useEffect } from "react";

function Product() {
  async function getProduct() {
    try {
      setTimeout(async () => {
        const data = await Api.get("/produtos");
        console.log(data);
        return data;
      }, 1000);
    } catch (e) {
      console.error("erro", e);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);
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
          <h2>PRODUTOS </h2>
          <button onClick={() => ModalFunction(1)} className="btn-add">
            <ModalAdd />
          </button>
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
        <div className="product-span ">
          <span className="product pro">1</span>
          <span className="product pro">ÁGUA</span>
          <span className="product pro">CRYSTAL</span>
          <span className="product pro">SEM GÁS</span>
        </div>
      </div>
    </>
  );
}

export default Product;
