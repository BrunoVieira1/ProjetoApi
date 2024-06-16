import { Input } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";
import { Api } from "../services/api/axios-config";
import moment from "moment";

interface ProductOutput {
  idProduct: number;
  quantity: number;
  unitaryValue: number;
  outputDate: string;
}

function ModalProductOutput() {
  const [output, setOutput] = useState<ProductOutput>({
    idProduct: 0,
    quantity: 0,
    unitaryValue: 0,
    outputDate: moment().format("YYYY-MM-DD"),
  });

  const productOutput = () => {
    try {
      Api.post("/saidaProdutos", {
        id_produto: output.idProduct,
        qtde: output.quantity,
        valor_unitario: output.unitaryValue,
        data_saida: output.outputDate,
      });
      alert("cadastrado");
    } catch (e) {
      console.error("erro", e);
    }
  };
  return (
    <>
      <h2>Cadastrar Saída do Produto</h2>
      <Input
        className="placeInput"
        placeholder="id - produto"
        value={output.idProduct}
        type="number"
        onChange={(e) => setOutput({ ...output, idProduct: e.target.value })}
      />
      <Input
        className="placeInput"
        placeholder="quantidade"
        value={output.quantity}
        type="number"
        onChange={(e) => setOutput({ ...output, quantity: e.target.value })}
      />
      <Input
        className="placeInput"
        placeholder="valor unitário"
        value={output.unitaryValue}
        type="number"
        onChange={(e) => setOutput({ ...output, unitaryValue: e.target.value })}
      />
      <Input className="placeInput" value={output.outputDate} disabled />
      <button className="add-btn" onClick={productOutput}>
        <AddBoxIcon style={{ color: "white" }} />
      </button>
    </>
  );
}
export default ModalProductOutput;
