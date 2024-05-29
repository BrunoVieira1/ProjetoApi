import { Input } from "@mui/material";

function ModalProductEntry() {
  return (
    <>
      <h2>Cadastrar Entrada do Produto</h2>
      <Input className="placeInput" placeholder="id - produto" />
      <Input className="placeInput" placeholder="quantidade" />
      <Input className="placeInput" placeholder="valor unitário" />
      <Input className="placeInput" placeholder="data de entrada" />
    </>
  );
}
export default ModalProductEntry;
