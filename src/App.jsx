import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import DesignStudio from './pages/DesignStudio';
import Visualization from './pages/Visualization';
import Marketplace from './pages/Marketplace';
import About from './pages/About';
import Payment from './pages/Payment';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <CartDrawer />
        <ChatWidget />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design-studio" element={<DesignStudio />} />
            <Route path="/visualization" element={<Visualization />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
