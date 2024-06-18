import { Input } from "@mui/material";
import { useState } from "react";
import { Api } from "../services/api/axios-config";
import AddBoxIcon from "@mui/icons-material/AddBox";
import moment from "moment";

interface ProductEntry {
  idProduct: number;
  quantity: number;
  unitaryValue: number;
  entryDate: string;
}

function ModalProductEntry() {
  const [entry, setEntry] = useState<ProductEntry>({
    idProduct: 0,
    quantity: 0,
    unitaryValue: 0,
    entryDate: moment().format("YYYY-MM-DD"),
  });

  const productEntry = () => {
    try {
      Api.post("/entradaProdutos", {
        id_produto: entry.idProduct,
        qtde: entry.quantity,
        valor_unitario: entry.unitaryValue,
        data_entrada: entry.entryDate,
      });
      alert("cadastrado");
    } catch (e) {
      console.error("erro", e);
    }
  };

  return (
    <>
      <h2>Cadastrar Entrada do Produto</h2>
      <Input
        className="placeInput"
        placeholder="id - produto"
        value={entry.idProduct}
        type="number"
        onChange={(e) => setEntry({ ...entry, idProduct: e.target.value })}
      />
      <Input
        className="placeInput"
        placeholder="quantidade"
        value={entry.quantity}
        type="number"
        onChange={(e) => setEntry({ ...entry, quantity: e.target.value })}
      />
      <Input
        className="placeInput"
        placeholder="valor unitário"
        value={entry.unitaryValue}
        type="number"
        onChange={(e) => setEntry({ ...entry, unitaryValue: e.target.value })}
      />
      <Input value={entry.entryDate} disabled />
      <br></br>
      <br></br>

      <button className="add-btn" onClick={productEntry}>
        <AddBoxIcon style={{ color: "white" }} />
      </button>
    </>
  );
}
export default ModalProductEntry;
