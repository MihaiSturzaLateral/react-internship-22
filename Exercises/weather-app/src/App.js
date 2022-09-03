import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Design from "./Design";

function App() {
  return (
    <>
      <div className="titleDiv">
        <h2 className="title">Weather Forecast Finder</h2>
      </div>
      <div className="App">
        <Design />
      </div>
    </>
  );
}

export default App;
