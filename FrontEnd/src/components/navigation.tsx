import "../output.css";
import "../index.css";
import "../styles/navigation.css";
import Logo from "../assets/logo.jpg";
import AbcIcon from "@mui/icons-material/Abc";

import InventoryIcon from "@mui/icons-material/Inventory";
import WestIcon from "@mui/icons-material/West";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

function handleMenu() {
  var nameBtns = document.querySelectorAll(".name-btn");
  var drawer = document.querySelectorAll(".drawer");

  nameBtns.forEach((btn) => {
    btn.classList.toggle("name-btn-visible");
  });

  drawer.forEach((btn) => {
    btn.classList.toggle("drawer-extend");
  });
}

function Navigation() {
  return (
    <>
      <div className="nav bg-azul-2 p-3">
        <div className="nav-alt">
          <button onClick={handleMenu} className="menu-btn">
            <div className="container-img rounded-xl">
              <img src={Logo} alt="" className="logo-nav" />
            </div>
            <span className="">Menu</span>
          </button>
          <span>Realizar ajuste de estoque</span>
        </div>

        <div className="adm-btn">
          <AdminPanelSettingsIcon />
          <span>Administrador</span>
        </div>
      </div>
      <div className="content-body">
        <div className="drawer">
          <span className="btn-drawer">
            <InventoryIcon />
            <span className="name-btn">Produtos</span>
          </span>
          <span className="btn-drawer">
            <WestIcon id="WestIcon-r" />
            <span className="name-btn">Entrada de Produtos</span>
          </span>
          <span className="btn-drawer">
            <WestIcon id="WestIcon-l" />
            <span className="name-btn">Saida de Produtos</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navigation;
