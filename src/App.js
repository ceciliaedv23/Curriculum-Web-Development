import "./App.css";
import MainContent from "./MainContent.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
