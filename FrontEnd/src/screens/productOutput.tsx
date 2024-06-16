/* import { fecharTela } from "../showScreens"; */
import { useEffect, useState } from "react";
import CloseScreen from "../button/closeScreen";
import ModalAdd from "../components/modalAdd";
import { ModalFunction } from "../components/modalFunction";
import { Api } from "../services/api/axios-config";

interface Output {
  id: number;
  id_produto: number;
  qtde: number;
  valor_unitario: number;
  data_saida: string;
}

function ProductOutput() {
  async function getProductOutput() {
    try {
      setTimeout(async () => {
        const outputData = await Api.get("/saidaProdutos", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        setOutput(outputData.data.produtosOut);
        console.log(outputData.data.produtosOut);
      }, 1000);
    } catch (e) {
      console.error("erro", e);
    }
  }
  useEffect(() => {
    getProductOutput();
  }, []);
  const [output, setOutput] = useState<Output[]>([]);
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
          <h2>SAÍDA DE PRODUTOS </h2>
          <button onClick={() => ModalFunction(3)} className="btn-add">
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
          <span className="product">DATA DE SAÍDA</span>
        </div>
        {output.map((product) => {
          return (
            <div className="product-span" key={product.id}>
              <span className="product pro">{product.id}</span>
              <span className="product pro">{product.id_produto}</span>
              <span className="product pro">{product.qtde}</span>
              <span className="product pro">{product.valor_unitario}</span>
              <span className="product pro">{product.data_saida}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductOutput;
