import { Route, Routes } from "react-router-dom";

//PAGES AND COMPONENTS
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="row">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
