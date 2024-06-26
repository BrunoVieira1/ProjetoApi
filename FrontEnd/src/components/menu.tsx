import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  function handleClose(n: number) {
    if (n == 1) {
      localStorage.setItem("isLogged", "0");
      window.location.href = "/";
    }
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        style={{ color: "#dcecfc" }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AdminPanelSettingsIcon />
        Administrador
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose(1)}>Sair</MenuItem>
      </Menu>
    </div>
  );
}
