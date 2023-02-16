import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import LayoutGrid from "./Layout/LayoutGrid";

function App({children}) {
  console.log("children",children);
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
