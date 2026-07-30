import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-dark-800 border-l border-white/5 z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-brand-400" />
            <h2 className="text-lg font-semibold">Your Cart</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/50">Your cart is empty</p>
              <p className="text-white/30 text-sm mt-1">Add products from the marketplace</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4 p-4 bg-dark-700/50 rounded-xl border border-white/5">
                <div className="w-20 h-20 rounded-lg bg-dark-600 flex-shrink-0 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm truncate">{item.name}</h3>
                  <p className="text-white/50 text-xs">{item.brand}</p>
                  <p className="text-brand-400 font-semibold mt-1">${item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="p-1 hover:bg-white/10 rounded">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm w-6 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="p-1 hover:bg-white/10 rounded">
                      <Plus className="w-3 h-3" />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="ml-auto p-1 hover:bg-red-500/20 text-white/50 hover:text-red-400 rounded transition-colors">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-white/5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white/50">Subtotal</span>
              <span className="text-xl font-bold">${total.toLocaleString()}</span>
            </div>
            <button className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all">
              Checkout
            </button>
            <button onClick={clearCart} className="w-full py-3 text-white/50 hover:text-white text-sm transition-colors">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
