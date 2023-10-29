import logo from './logo.svg';
import Homepage from './components/home';
import Watchvideo from './components/watchvideo';
import './components/styles/css/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, main, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Homepage
            />} exact />
        <Route
          path="/watchvideo/:username/:videoid/"
          element={
            <Watchvideo
          
            />
          }
        />
      </Routes>
    </main>
  </BrowserRouter> 
  );
}

export default App;
