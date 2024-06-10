import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
function App() {

  const handleContextMenu = (e) => {
    e.preventDefault();
  }
  
  return (
    <div onContextMenu={handleContextMenu} className="App">
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </div>
  );
}



export default App;
