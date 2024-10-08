import arrowIcon from "../assets/icon-arrow.svg";
import "./IPAddressInput.css";

export function IPAddressInput() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        name="IP input"
        className="mobile"
      />
      <button type="submit">
        <img src={arrowIcon} />
      </button>
    </form>
  );
}
