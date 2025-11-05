import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./Router/AppRouter";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;