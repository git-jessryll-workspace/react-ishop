import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppProvider from "./context/AppProvider";
import { MainPage, ProductPage } from "./pages";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
