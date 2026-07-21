import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/landingPage";
import Product from "../src/product";
import { Provider } from "react-redux";
import { store } from "../src/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
