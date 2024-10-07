import "./App.css";
import { InfoSection, IPAddressInput, Header, LeafletMap } from "./components";

function App() {
  return (
    <>
      <Header>
        <IPAddressInput />
      </Header>
      <main>
        <InfoSection label="IP ADDRESS" value="192.212.174.101" />
        <br />
        <InfoSection label="LOCATION" value="Brooklyn, NY 10001" />
        <br />
        <InfoSection label="TIMEZONE" value="UTC-05:00" />
        <br />
        <InfoSection label="ISP" value="SpaceX Starlink" />
      </main>
      <LeafletMap />
    </>
  );
}

export default App;
