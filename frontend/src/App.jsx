import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./Router/AppRouter";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </Router>
  );
}

export default App;