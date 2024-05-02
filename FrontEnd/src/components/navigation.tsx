import "../output.css";
import "../index.css";
import "../App.css";
import Logo from "../assets/logo.jpg";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
function Navigation() {
  return (
    <>
      <div className="nav flex bg-azul-2 p-3 ">
        <div className="container-img rounded-xl">
          <img src={Logo} alt="" className="logo-nav" />
        </div>
        <div className="menu-btn">
          <MenuIcon />
          <text>Menu</text>
        </div>
        <text>Realizar ajuste de estoque</text>
        <div className="adm-btn">
          <AdminPanelSettingsIcon />
          <text>Administrador</text>
        </div>
      </div>
    </>
  );
}

export default Navigation;
