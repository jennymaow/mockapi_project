import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import LayoutGrid from "./Layout/LayoutGrid";
import useRequest from "./hooks/useRequest";

function App() {
  const request = useRequest();
  return (
    <div className="App">
      <LayoutGrid>
        <Header />
        <Outlet context={[request]}/>
      </LayoutGrid>
    </div>
  );
}
export default App;
