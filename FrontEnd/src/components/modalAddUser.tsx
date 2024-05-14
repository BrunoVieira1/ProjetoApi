import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Input } from "@mui/material";
import "../styles/modalAdd.css";
import AddBoxIcon from "@mui/icons-material/AddBox";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const addCircle = {
  color: "#70B842",
};

type Produto = {
  nome: string;
};

export function ModalAdd({ nome }: Produto) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <AddCircleIcon sx={addCircle} />
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className="modal" sx={style}>
          <h2>Cadastrar Produto</h2>
          <Input className="placeInput" placeholder="Nome" value={nome} />
          <Input className="placeInput" placeholder="Marca" />
          <Input className="placeInput" placeholder="Descrição" />
          <button className="add-btn">
            <AddBoxIcon style={{ color: "white" }} />
          </button>
        </Box>
      </Modal>
    </div>
  );
}
