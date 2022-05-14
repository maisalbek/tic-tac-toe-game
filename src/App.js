import "./App.css";
import ContextProvider from "./components/ContextProvider";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <MyRoutes />
      </ContextProvider>
    </div>
  );
}

export default App;
