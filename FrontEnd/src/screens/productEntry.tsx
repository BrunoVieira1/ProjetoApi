import CloseScreen from "../button/closeScreen";
import ModalAdd from "../components/modalAdd";
import { ModalFunction } from "../components/modalFunction";
import { Api } from "../services/api/axios-config";
import { useEffect, useState } from "react";

interface Entry {
  id: number;
  id_produto: number;
  qtde: number;
  valor_unitario: number;
  data_entrada: string;
}

function ProductEntry() {
  async function getProduct() {
    try {
      setTimeout(async () => {
        const entryData = await Api.get("/entradaProdutos", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        setEntry(entryData.data.produtosEntry);
        console.log(entryData.data.produtosEntry);
      }, 1000);
    } catch (e) {
      console.error("erro", e);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  const [entry, setEntry] = useState<Entry[]>([]);
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
        {entry.map((product) => {
          return (
            <div className="product-span" key={product.id}>
              <span className="product pro">{product.id}</span>
              <span className="product pro">{product.id_produto}</span>
              <span className="product pro">{product.qtde}</span>
              <span className="product pro">{product.valor_unitario}</span>
              <span className="product pro">{product.data_entrada}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductEntry;
