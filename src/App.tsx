import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import { HangARooProvider } from "./store/gameContext";

function App() {
  return (
    <HangARooProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SplashScreen />} />
        </Routes>
      </BrowserRouter>
    </HangARooProvider>
  );
}

export default App;
