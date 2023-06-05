import "./App.css";
import Search from "./Search";
import Location from "./Location";
import City from "./City";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <Location />
          <City />
          <Weather />
          <Forecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
