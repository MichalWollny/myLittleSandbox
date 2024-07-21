import { Route, Routes } from "react-router";
import "./App.css";
import TruckLoadingSimulator from "./components/Truckloader";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Freighter from "./components/Freighter";
import Calender from "./components/Calender";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/truckloader" element={<TruckLoadingSimulator />} />
        <Route path="/freighter" element={<Freighter />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/currencyconverter" element={<CurrencyConverter />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* 
  const [count, setCount] = useState(0);

  
  <button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button> */
}
