import { Input } from "@mui/material";
import { useState } from "react";
import { Api } from "../services/api/axios-config";
import AddBoxIcon from "@mui/icons-material/AddBox";

interface ProductEntry {
  idProduct: number;
  quantity: number;
  unitaryValue: number;
  entryDate: Date;
}

function ModalProductEntry() {
  const [entry, setEntry] = useState<ProductEntry>({
    idProduct: 0,
    quantity: 0,
    unitaryValue: 0,
    entryDate: new Date(),
  });

  const productEntry = () => {
    try {
      Api.post("/entradaProdutos", {
        id_produto: entry.idProduct,
        quantity: entry.quantity,
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
      />
      <Input
        className="placeInput"
        placeholder="quantidade"
        value={entry.quantity}
      />
      <Input
        className="placeInput"
        placeholder="valor unitário"
        value={entry.unitaryValue}
      />
      <Input value={entry.entryDate} disabled />

      <button className="add-btn" onClick={productEntry}>
        <AddBoxIcon style={{ color: "white" }} />
      </button>
    </>
  );
}
export default ModalProductEntry;
