import { Input } from "@mui/material";

function ModalProductOutput() {
  return (
    <>
      <h2>Cadastrar Saída do Produto</h2>
      <Input className="placeInput" placeholder="id - produto" />
      <Input className="placeInput" placeholder="quantidade" />
      <Input className="placeInput" placeholder="valor unitário" />
      <Input className="placeInput" placeholder="data de saída" />
    </>
  );
}
export default ModalProductOutput;
