import { useState } from "react";

import { Input } from "@mui/material";

function ModalProduct() {
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeBrand = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(event.target.value);
  };

  return (
    <>
      <h2>Cadastrar Produto</h2>
      <Input
        className="placeInput"
        placeholder="Nome"
        value={name}
        onChange={handleChangeName}
      />
      <Input
        className="placeInput"
        placeholder="Marca"
        value={brand}
        onChange={handleChangeBrand}
      />
      <Input className="placeInput" placeholder="Descrição" />
    </>
  );
}
export default ModalProduct;
