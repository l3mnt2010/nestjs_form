import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog" />
      </Routes>
    </div>
  );
}

export default App;
