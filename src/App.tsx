import "./App.css";
import { InfoSection, IPAddressInput, Header, LeafletMap } from "./components";
import { useQuery } from "@tanstack/react-query";

const KEY = "at_4pySMrTTHtnpNknY1AOjQNkzAcW1j";

interface IPData {
  ip: string;
  location: Location;
  isp: string;
}

interface Location {
  country: string;
  region: string;
  timezone: string;
}

function App() {
  const { data, isLoading } = useQuery({
    queryFn: fetchData,
    queryKey: ["country"],
  });

  return (
    <>
      <Header>
        <IPAddressInput />
      </Header>
      <main>
        {isLoading && <span>loading</span>}
        <InfoSection label="IP ADDRESS" value={data?.ip} showBreakline />
        <InfoSection
          label="LOCATION"
          value={`${data?.location.region}, ${data?.location.country}`}
          showBreakline
        />
        <InfoSection label="TIMEZONE" value={data?.location.timezone}  showBreakline />
        <InfoSection
          label="ISP"
          value={data?.isp}
          showBreakline={false}
        />
      </main>
      <LeafletMap />
    </>
  );
}

export default App;

async function fetchData(): Promise<IPData | void> {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=${KEY}`
  );

  if (!response.ok) console.log("Error fetching data: ", response);

  return response.json();
}
