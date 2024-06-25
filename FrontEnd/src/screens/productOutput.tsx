/* import { fecharTela } from "../showScreens"; */
import { useEffect, useState } from "react";
import CloseScreen from "../button/closeScreen";
import ModalAdd from "../components/modalAdd";
import { ModalFunction } from "../components/modalFunction";
import { Api } from "../services/api/axios-config";
import modalUpdateOutput from "../modals/modalUpdateOutput";

interface Output {
  id: number;
  id_produto: number;
  qtde: number;
  valor_unitario: number;
  data_saida: string;
}

function ProductOutput() {
  function handleOpen(
    id: number,
    id_produto: number,
    qtde: number,
    valor_unitario: number,
    data_saida: string
  ) {
    modalUpdateOutput(id, id_produto, qtde, valor_unitario, data_saida);
  }
  async function getProductOutput() {
    try {
      setTimeout(async () => {
        const outputData = await Api.get("/saidaProdutos", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        setOutput(outputData.data.produtosOut);
      }, 1000);
    } catch (e) {
      console.error("erro", e);
    }
  }
  function deleteProduct(id: number) {
    Api.delete("/saidaProdutos", {
      data: {
        id: id,
      },
    });
  }
  const [output, setOutput] = useState<Output[]>([]);
  useEffect(() => {
    getProductOutput();
  }, [output]);
  return (
    <>
      <div className="nav-content">
        <div className="flex ">
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
          <span className="product button"></span>
          <span className="product button"></span>
        </div>
        {output.map((product) => {
          return (
            <div className="product-span" key={product.id}>
              <span className="product pro">{product.id}</span>
              <span className="product pro">{product.id_produto}</span>
              <span className="product pro">{product.qtde}</span>
              <span className="product pro">{product.valor_unitario}</span>
              <span className="product pro">{product.data_saida}</span>
              <span className="product pro button">
                <button
                  className="delete"
                  onClick={() => deleteProduct(product.id)}
                >
                  X
                </button>
              </span>
              <span className="product pro button">
                <button
                  className="delete"
                  onClick={() =>
                    handleOpen(
                      product.id,
                      product.id_produto,
                      product.qtde,
                      product.valor_unitario,
                      product.data_saida
                    )
                  }
                >
                  U
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductOutput;
