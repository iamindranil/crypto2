import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Exchanges from "./components/Exchanges";
import CoinDetalis from "./components/CoinDetalis";
import Coins from "./components/Coins";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="/exchanges" element={<Exchanges/>}/>
        <Route path="/coins/:id" element={<CoinDetalis/>}/>

      </Routes>
    </Router>
  );
}

export default App;
