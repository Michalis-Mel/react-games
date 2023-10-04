import { Route, Routes } from "react-router-dom";

//PAGES AND COMPONENTS
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Header from "./components/Header";

function App() {
  return (
    <div className="row">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
