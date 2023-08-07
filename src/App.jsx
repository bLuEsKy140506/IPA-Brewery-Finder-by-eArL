import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "../src/router-setup/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
