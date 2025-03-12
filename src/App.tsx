import "./App.css";
import { Application } from "./Components/Application";
import { Counter } from "./Components/Counter";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;
