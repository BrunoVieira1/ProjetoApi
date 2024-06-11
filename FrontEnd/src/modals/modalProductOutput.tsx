import { Input } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

function ModalProductOutput() {
  return (
    <>
      <h2>Cadastrar Saída do Produto</h2>
      <Input className="placeInput" placeholder="id - produto" />
      <Input className="placeInput" placeholder="quantidade" />
      <Input className="placeInput" placeholder="valor unitário" />
      <Input className="placeInput" placeholder="data de saída" />
      <button className="add-btn">
        <AddBoxIcon style={{ color: "white" }} />
      </button>
    </>
  );
}
export default ModalProductOutput;
