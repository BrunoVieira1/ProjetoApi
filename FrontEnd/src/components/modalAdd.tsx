import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";

import "../styles/modalAdd.css";

import ModalProduct from "../modals/modalProduct";
import ModalProductEntry from "../modals/modalProductEntry";
import ModalProductOutput from "../modals/modalProductOutput";
import ModalFunctionary from "../modals/modalFunctionary";

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

export default function ModalAdd() {
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
          <span className="modalProduct all">
            <ModalProduct />
          </span>
          <span className="modalProductEntry all">
            <ModalProductEntry />
          </span>
          <span className="modalProductOutput all">
            <ModalProductOutput />
          </span>
          <span className="modalFunctionary all">
            <ModalFunctionary />
          </span>

          <button className="add-btn">
            <AddBoxIcon style={{ color: "white" }} />
          </button>
        </Box>
      </Modal>
    </div>
  );
}
