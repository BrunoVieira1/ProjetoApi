import "../styles/screens.css";
import CloseScreen from "../button/closeScreen";
import ModalAdd from "../components/modalAdd";
import { ModalFunction } from "../components/modalFunction";
import { Api } from "../services/api/axios-config";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  nome: string;
  marca: string;
  descricao: string;
}

function Product() {
  async function getProduct() {
    try {
      setTimeout(async () => {
        const productData = await Api.get("/produtos", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        setProducts(productData.data.produtos);
        console.log(productData.data.produtos);
      }, 1000);
    } catch (e) {
      console.error("erro", e);
    }
  }
  function deleteProduct(id: number) {
    Api.delete("/produtos", {
      data: {
        id: id,
      },
    });
  }

  useEffect(() => {
    getProduct();
  }, []);
  const [products, setProducts] = useState<Product[]>([]);
  return (
    <>
      <div className="nav-content">
        <div className="flex ">
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
          <span className="product button"></span>
        </div>
        {products.map((product) => {
          return (
            <div className="product-span" key={product.id}>
              <span className="product pro">{product.id}</span>
              <span className="product pro">{product.nome}</span>
              <span className="product pro">{product.marca}</span>
              <span className="product pro">{product.descricao}</span>
              <span className="product pro button">
                <button
                  className="delete"
                  onClick={() => deleteProduct(product.id)}
                >
                  X
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
