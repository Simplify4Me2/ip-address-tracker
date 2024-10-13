import { useState } from "react";
import arrowIcon from "../assets/icon-arrow.svg";
import "./IPAddressInput.css";

// const IP_ADDRESS_REGEX =
//   "/(?:(?:25[0-5]|2[0-4]d|[01]?d?d{1}).){3}(?:25[0-5]|2[0-4]d|[01]?d?d{1})/g";

const IP_ADDRESS_REGEX = new RegExp(
  /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})$/
);

interface IIPAddressInputProps {
  onInputSubmitted: (address: string) => void;
}

export function IPAddressInput({ onInputSubmitted }: IIPAddressInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setValid] = useState(true);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (IP_ADDRESS_REGEX.test(inputValue)) {
      onInputSubmitted(inputValue);
      setValid(true);
    } else setValid(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setValid(true);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        name="IP input"
        className={`mobile ${isValid ? "" : "invalid"}`}
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleClick}>
        <img src={arrowIcon} />
      </button>
    </form>
  );
}
