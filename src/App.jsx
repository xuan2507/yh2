import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import DesignStudio from './pages/DesignStudio';
import Visualization from './pages/Visualization';
import Marketplace from './pages/Marketplace';
import About from './pages/About';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <CartDrawer />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design-studio" element={<DesignStudio />} />
            <Route path="/visualization" element={<Visualization />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
