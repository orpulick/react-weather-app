import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Denver" />
        <footer>
          This project coded by Olivia Pulick{" "}
          <a
            href="https://github.com/orpulick/react-weather-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Sourced by Github
          </a>
        </footer>
      </div>
    </div>
  );
}
