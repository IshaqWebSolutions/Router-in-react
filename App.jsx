import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <div>
      <h3>Router in React js</h3>

      <BrowserRouter>
        <Link to="/">Home</Link>
        {"    "}
        <Link to="/about">About</Link>
        {"    "}
        <Link to="/contact">Contact</Link>
        {"    "}
        <Link to="/products">Products</Link>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/products" element={<h1>Products</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
