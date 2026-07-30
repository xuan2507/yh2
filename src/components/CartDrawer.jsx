import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-charcoal-800/20 backdrop-blur-sm z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream-100 border-l border-sand-100/30 z-50 flex flex-col">
        <div className="flex items-center justify-between p-8 border-b border-sand-100/30">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-terra-500" strokeWidth={1.5} />
            <h2 className="font-serif text-xl text-charcoal-800">Your Cart</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-sand-100/30 transition-colors">
            <X className="w-4 h-4 text-charcoal-600" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-10 h-10 text-sand-200 mx-auto mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-charcoal-500">Your cart is empty</p>
              <p className="text-charcoal-400 text-sm mt-1">Add products from the marketplace</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-5 pb-6 border-b border-sand-100/30 last:border-0">
                <div className="w-24 h-24 bg-cream-200 flex-shrink-0 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-charcoal-800 truncate">{item.name}</h3>
                  <p className="text-charcoal-400 text-xs mt-0.5">{item.brand}</p>
                  <p className="font-serif text-terra-500 mt-2">${item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-7 h-7 flex items-center justify-center border border-sand-200 hover:border-terra-300 transition-colors">
                      <Minus className="w-3 h-3" strokeWidth={1.5} />
                    </button>
                    <span className="text-sm w-4 text-center tabular-nums">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-7 h-7 flex items-center justify-center border border-sand-200 hover:border-terra-300 transition-colors">
                      <Plus className="w-3 h-3" strokeWidth={1.5} />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="ml-auto text-charcoal-400 hover:text-terra-500 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-sand-100/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-charcoal-500 text-sm tracking-wide">Subtotal</span>
              <span className="font-serif text-2xl text-charcoal-800">${total.toLocaleString()}</span>
            </div>
            <button className="w-full py-4 bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 text-[13px] tracking-[0.15em] uppercase transition-all">
              Checkout
            </button>
            <button onClick={clearCart} className="w-full py-3 text-charcoal-400 hover:text-charcoal-600 text-xs tracking-wide transition-colors">
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
