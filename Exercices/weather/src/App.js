import "../src/App.css";
import Page from "./components/page/Page";
import store from "./components/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Page />
        </div>
      </Provider>
    </>
  );
}

export default App;
