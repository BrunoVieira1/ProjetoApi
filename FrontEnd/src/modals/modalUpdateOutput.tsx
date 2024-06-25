import { Api } from "../services/api/axios-config";
import { useState } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

interface ProductEntry {
  idProduct: number;
  quantity: number;
  unitaryValue: number;
  outputDate: string;
}

function modalUpdateOutput(
  id: number,
  idProduct: number,
  quantity: number,
  unitaryValue: number,
  outputDate: string
) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const [productUpdate, setProductUpdate] = useState<ProductEntry>({
    idProduct: idProduct,
    quantity: quantity,
    unitaryValue: unitaryValue,
    outputDate: outputDate,
  });

  const productOutput = () => {
    try {
      Api.put("/saidaProdutos", {
        id: id,
        id_produto: productUpdate.idProduct,
        qtde: productUpdate.quantity,
        valor_unitario: productUpdate.unitaryValue,
        data_saida: productUpdate.outputDate,
      });
      alert("cadastrado");
    } catch (e) {
      console.error("erro", e);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <h2>Cadastrar Entrada do Produto</h2>
        <Input
          className="placeInput"
          placeholder="id - produto"
          value={productUpdate.idProduct}
          type="number"
          onChange={(e) =>
            setProductUpdate({ ...productUpdate, idProduct: e.target.value })
          }
        />
        <Input
          className="placeInput"
          placeholder="quantidade"
          value={productUpdate.quantity}
          type="number"
          onChange={(e) =>
            setProductUpdate({ ...productUpdate, quantity: e.target.value })
          }
        />
        <Input
          className="placeInput"
          placeholder="valor unitário"
          value={productUpdate.unitaryValue}
          type="number"
          onChange={(e) =>
            setProductUpdate({ ...productUpdate, unitaryValue: e.target.value })
          }
        />
        <Input value={productUpdate.outputDate} disabled />
        <br></br>
        <br></br>

        <button className="add-btn" onClick={productOutput}>
          <AddBoxIcon style={{ color: "white" }} />
        </button>
      </Box>
    </Modal>
  );
}

export default modalUpdateOutput;
