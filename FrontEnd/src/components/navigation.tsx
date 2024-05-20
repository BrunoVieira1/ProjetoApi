import "../styles/output.css";
import "../styles/index.css";
import "../styles/navigation.css";

import { ContentScreen } from "./contentsScreen";
import { Drawer } from "./drawer";
import FadeMenu from "./menu";
import Logo from "../assets/logo.jpg";

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
        <Drawer />
        <ContentScreen />
      </div>
    </>
  );
}

export default Navigation;
