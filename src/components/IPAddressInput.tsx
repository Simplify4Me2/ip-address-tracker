import arrowIcon from "../assets/icon-arrow.svg";
import "./IPAddressInput.css";

export function IPAddressInput() {
  return (
    <form>
      <input type="text" placeholder="192.212.174.101" name="IP input" />
      <button type="submit">
        <img src={arrowIcon} />
      </button>
    </form>
  );
}
