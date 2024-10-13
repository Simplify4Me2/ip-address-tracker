import "./App.css";
import { InfoSection, IPAddressInput, Header, LeafletMap } from "./components";
import { useQuery } from "@tanstack/react-query";
import loadingIcon from "./assets/loading.svg";
import { IPData } from "./models";
import { useState } from "react";

const KEY = "at_4pySMrTTHtnpNknY1AOjQNkzAcW1j";

async function fetchData(ip: string): Promise<IPData | void> {
  let uri = `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}`;

  if (ip) uri += `&ipAddress=${ip}`;

  const response = await fetch(uri);

  if (!response.ok) console.log("Error fetching data: ", response);

  return response.json();
}

function App() {
  const [ipAddress, setIpAddress] = useState("");

  const { data, isLoading, error } = useQuery({
    queryFn: () => fetchData(ipAddress),
    queryKey: ["country", ipAddress],
  });

  const handleInputSubmit = (address: string) => {
    setIpAddress(address);
  };

  return (
    <>
      <Header>
        <IPAddressInput onInputSubmitted={handleInputSubmit} />
      </Header>
      <main>
        {isLoading && <img src={loadingIcon} />}
        {error && <span>Something went wrong fetching your IP</span>}
        {!isLoading && (
          <>
            <InfoSection label="IP ADDRESS" value={data?.ip} showBreakline />
            <InfoSection
              label="LOCATION"
              value={`${data?.location.region}, ${data?.location.country}`}
              showBreakline
            />
            <InfoSection
              label="TIMEZONE"
              value={`UTC ${data?.location.timezone}`}
              showBreakline
            />
            <InfoSection label="ISP" value={data?.isp || 'unknown'} showBreakline={false} />
          </>
        )}
      </main>
      <LeafletMap
        latitude={data?.location.lat}
        longitude={data?.location.lng}
      />
    </>
  );
}

export default App;
