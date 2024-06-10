import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import "./App.css";
import { Home, Stats } from "./pages";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
