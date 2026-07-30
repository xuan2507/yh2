import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-ink/10 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-paper border-l border-line z-50 flex flex-col">
        <div className="flex items-center justify-between p-8 border-b border-line">
          <span className="font-serif text-lg text-ink">Your Cart</span>
          <button onClick={() => setIsOpen(false)} className="text-stone hover:text-ink transition-colors">
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-8 h-8 text-line mx-auto mb-4" strokeWidth={1} />
              <p className="text-stone text-sm">Your cart is empty</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-5 pb-6 border-b border-line last:border-0">
                <div className="w-20 h-20 bg-paper flex-shrink-0 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-ink text-sm">{item.name}</h3>
                  <p className="text-stone text-xs mt-0.5">{item.brand}</p>
                  <p className="font-serif text-ink mt-2">${item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-6 h-6 flex items-center justify-center border border-line hover:border-ink transition-colors">
                      <Minus className="w-3 h-3" strokeWidth={1.5} />
                    </button>
                    <span className="text-xs w-4 text-center tabular-nums">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-6 h-6 flex items-center justify-center border border-line hover:border-ink transition-colors">
                      <Plus className="w-3 h-3" strokeWidth={1.5} />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="ml-auto text-stone hover:text-ink transition-colors">
                      <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-line space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-stone text-sm">Subtotal</span>
              <span className="font-serif text-xl text-ink">${total.toLocaleString()}</span>
            </div>
            <Link to="/payment" onClick={() => setIsOpen(false)} className="block w-full py-4 bg-ink hover:bg-stone text-paper text-[12px] tracking-[0.12em] uppercase transition-all text-center">
              Checkout
            </Link>
            <button onClick={clearCart} className="w-full py-2 text-stone hover:text-ink text-[11px] transition-colors">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
