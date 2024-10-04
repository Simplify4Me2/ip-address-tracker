import "./App.css";
import arrowIcon from "./assets/icon-arrow.svg";
import { InfoSection } from "./components/InfoSection";

function App() {
  return (
    <>
      <header>
        <h1 className="app-title">IP Address Tracker</h1>
        <form>
          <input type="text" placeholder="192.212.174.101" />
          <button type="submit">
            <img src={arrowIcon} />
          </button>
        </form>
      </header>
      <main>
        <InfoSection label="IP ADDRESS" value="192.212.174.101" />
        <InfoSection label="LOCATION" value="Brooklyn, NY 10001" />
        <InfoSection label="TIMEZONE" value="UTC-05:00" />
        <InfoSection label="ISP" value="SpaceX Starlink" />
      </main>
    </>
  );
}

export default App;
