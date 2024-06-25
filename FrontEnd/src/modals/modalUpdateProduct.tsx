import { Api } from "../services/api/axios-config";
import { useState } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { Input } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

interface Product {
  name: string;
  brand: string;
  description: string;
  quantity: string;
}

function modalteste(
  id: number,
  name: string,
  brand: string,
  description: string,
  quantity: string
) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const [productUpdate, setProductUpdate] = useState<Product>({
    name: name,
    brand: brand,
    description: description,
    quantity: quantity,
  });

  const insertProduct = () => {
    try {
      Api.put("/produtos", {
        id: id,
        nome: productUpdate.name,
        marca: productUpdate.brand,
        descricao: productUpdate.description,
        qtde: productUpdate.quantity,
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
        <h2>Cadastrar Produto</h2>
        <Input
          className="placeInput"
          placeholder="Nome"
          value={productUpdate.name}
          onChange={(e) =>
            setProductUpdate({ ...productUpdate, name: e.target.value })
          }
        />
        <Input
          className="placeInput"
          placeholder="Marca"
          value={productUpdate.brand}
          onChange={(e) =>
            setProductUpdate({ ...productUpdate, brand: e.target.value })
          }
        />
        <Input
          className="placeInput"
          placeholder="Descrição"
          value={productUpdate.description}
          onChange={(e) =>
            setProductUpdate({ ...productUpdate, description: e.target.value })
          }
        />
        <Input
          className="placeInput"
          placeholder="Quantidade"
          value={productUpdate.quantity}
          type="number"
          onChange={(e) =>
            setProductUpdate({ ...productUpdate, quantity: e.target.value })
          }
        />
        <br></br>
        <button className="add-btn" onClick={insertProduct}>
          <AddBoxIcon style={{ color: "white" }} />
        </button>
      </Box>
    </Modal>
  );
}

export default modalteste;
