import React from "react";
import { ScrollProvider } from "./context/ScrollContext";
import Home from "./pages/Home";

function App() {
  return (
    <ScrollProvider>
      <Home />
    </ScrollProvider>
  );
}

export default App;
