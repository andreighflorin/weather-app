import "./App.css";
import { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import Wrapper from "./components/UI/Wrapper";
import AddForm from "./components/AddForm/AddForm";
import Card from "./components/UI/Card";
import { useData } from "./hooks/useData";

const base = "http://api.weatherapi.com/v1/current.json";
const apiKey = "7712ff3e89ed4b16b2f151950231608";

function App() {
  const { fetchData } = useFetch();
  const { city, data, isLoading, error } = useData();

  useEffect(() => {
    if (city) {
      fetchData(`${base}?key=${apiKey}&q=${city}`);
    }
    return () => {};
  }, [city, fetchData]);

  return (
    <div className="App">
      <Wrapper>
        <h2>Weather App</h2>
        <AddForm />
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">Something went wrong!</p>}
        {data && !error && (
          <Card condition={data.current} location={data.location} />
        )}
      </Wrapper>
    </div>
  );
}

export default App;
