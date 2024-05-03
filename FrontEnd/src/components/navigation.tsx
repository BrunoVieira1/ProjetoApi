import "../output.css";
import "../index.css";
import "../styles/navigation.css";
import { renderDisplay } from "./mostrarTelas";

import Content from "./content";
import FadeMenu from "./menu";
import Logo from "../assets/logo.jpg";

import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import WestIcon from "@mui/icons-material/West";
import BadgeIcon from "@mui/icons-material/Badge";

function handMenu() {
  var nameBtns = document.querySelectorAll(".name-btn");
  var drawer = document.querySelectorAll(".drawer");
  var menuBtn = document.querySelectorAll(".menu-btn");

  nameBtns.forEach((btn) => {
    btn.classList.toggle("name-btn-visible");
  });

  drawer.forEach((btn) => {
    btn.classList.toggle("drawer-extend");
  });

  menuBtn.forEach((btn) => {
    btn.classList.toggle("menuBtn-extend");
  });
}

function Navigation() {
  return (
    <>
      <div className="nav bg-azul-2 ">
        <div className="nav-alt">
          <button onClick={handMenu} className="menu-btn">
            <div className="container-img rounded-xl">
              <img src={Logo} alt="" className="logo-nav" />
            </div>
            <span className="">Menu</span>
          </button>
          <span>Realizar ajuste de estoque</span>
        </div>

        <div className="adm-btn">
          <FadeMenu />
        </div>
      </div>

      <div className="content-body">
        <div className="drawer">
          <button onClick={() => renderDisplay(1)} className="btn-drawer">
            <HomeIcon />
            <span className="name-btn">Início</span>
          </button>
          <button onClick={() => renderDisplay(2)} className="btn-drawer">
            <InventoryIcon />
            <span className="name-btn">Produtos</span>
          </button>
          <button className="btn-drawer">
            <WestIcon id="WestIcon-r" />
            <span className="name-btn">Entrada de Produtos</span>
          </button>
          <button className="btn-drawer">
            <WestIcon id="WestIcon-l" />
            <span className="name-btn">Saida de Produtos</span>
          </button>
          <button className="btn-drawer">
            <BadgeIcon />
            <span className="name-btn">Funcionários</span>
          </button>
        </div>
        <div className="content all">
          <Content />
        </div>
        <div className="teste all">
          <h1>TESTE</h1>
        </div>
      </div>
    </>
  );
}

export default Navigation;
