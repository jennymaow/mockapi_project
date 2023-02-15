import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import LayoutGrid from "./Layout/LayoutGrid";

function App() {
  return (
    <div className="App">
    <LayoutGrid>
      <Header />
      <Outlet />
      </LayoutGrid>
    </div>
  );
}

export default App;
