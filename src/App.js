import { useState, useEffect } from "react";
import Map from "./Components/Map"
import Loader from "./Components/Loader"
import Footer from "./Components/Footer";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    }

    fetchEvents();
  }, []);

  return (
    <div>
      { !loading ? <Map eventData={ eventData } /> : <Loader /> }
      <Footer />
    </div>
  );
}

export default App;
