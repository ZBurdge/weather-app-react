import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Weather defaultCity="Avondale" />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
