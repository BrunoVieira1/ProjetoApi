import CloseIcon from "@mui/icons-material/Close";
import { renderDisplay } from "../components/showScreens";

function CloseScreen() {
  return (
    <>
      <span
        style={{ padding: "4px" }}
        className="CloseIcon"
        onClick={() => renderDisplay(0, true)}
      >
        <CloseIcon />
      </span>
    </>
  );
}

export default CloseScreen;
