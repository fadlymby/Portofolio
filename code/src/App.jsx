import { useState } from "react";
import "./App.css";
import HomeComponent from "./component/home";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeComponent/>
    </>
  );
}

export default App;
