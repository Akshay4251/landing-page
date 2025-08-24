import LogoName from './components/Logo';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <LogoName />
      <Navbar />
      <ThemeToggle />
      <div id="home"><Home /></div>
      <Footer />
    </>
  );
}

export default App;
