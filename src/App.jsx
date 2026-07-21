import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./product";
import LandingPage from "./landingPage";
import { Provider } from "react-redux";
import { store } from "./store";

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
