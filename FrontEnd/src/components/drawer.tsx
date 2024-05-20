import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import WestIcon from "@mui/icons-material/West";
import BadgeIcon from "@mui/icons-material/Badge";
import { renderDisplay } from "./showScreens";
function Drawer() {
  return (
    <>
      <div className="drawer">
        <button onClick={() => renderDisplay(1)} className="btn-drawer">
          <HomeIcon />
          <span className="name-btn">Início</span>
        </button>
        <button onClick={() => renderDisplay(2)} className="btn-drawer">
          <InventoryIcon />
          <span className="name-btn">Produtos</span>
        </button>
        <button onClick={() => renderDisplay(3)} className="btn-drawer">
          <WestIcon id="WestIcon-r" />
          <span className="name-btn">Entrada de Produtos</span>
        </button>
        <button onClick={() => renderDisplay(4)} className="btn-drawer">
          <WestIcon id="WestIcon-l" />
          <span className="name-btn">Saida de Produtos</span>
        </button>
        <button className="btn-drawer">
          <BadgeIcon />
          <span className="name-btn">Funcionários</span>
        </button>
      </div>
    </>
  );
}

export { Drawer };