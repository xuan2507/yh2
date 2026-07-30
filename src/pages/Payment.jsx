import { useState } from 'react';
import { CreditCard, Building2, Wallet, Check, ArrowLeft, Lock, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Payment() {
  const { items, total } = useCart();
  const [method, setMethod] = useState('card');
  const [submitted, setSubmitted] = useState(false);

  const banks = [
    { name: 'Maybank', account: '5623 8910 2345', holder: 'xuantelier Sdn Bhd' },
    { name: 'CIMB Bank', account: '7605 4321 0987', holder: 'xuantelier Sdn Bhd' },
    { name: 'Public Bank', account: '3298 7654 3210', holder: 'xuantelier Sdn Bhd' },
    { name: 'HSBC', account: '1456 7890 1234', holder: 'xuantelier Sdn Bhd' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-28 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-ink flex items-center justify-center mx-auto mb-8">
            <Check className="w-8 h-8 text-paper" strokeWidth={1.5} />
          </div>
          <h2 className="font-serif text-3xl text-ink mb-4">Payment Submitted</h2>
          <p className="text-stone text-sm leading-relaxed mb-8">
            Thank you for your order. We will process your payment and send a confirmation email shortly.
          </p>
          <Link to="/marketplace" className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-ink hover:text-stone transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <Link to="/marketplace" className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-stone hover:text-ink transition-colors mb-12">
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          Back to Marketplace
        </Link>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Payment Form */}
          <div className="lg:col-span-3">
            <h1 className="font-serif text-3xl text-ink mb-2">Checkout</h1>
            <p className="text-stone text-sm mb-10">Complete your purchase securely</p>

            {/* Payment Methods */}
            <div className="mb-10">
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-4">Payment Method</span>
              <div className="grid grid-cols-3 gap-px bg-line">
                {[
                  { id: 'card', label: 'Credit / Debit Card', icon: <CreditCard className="w-4 h-4" strokeWidth={1.5} /> },
                  { id: 'tng', label: 'Touch n Go', icon: <Wallet className="w-4 h-4" strokeWidth={1.5} /> },
                  { id: 'bank', label: 'Bank Transfer', icon: <Building2 className="w-4 h-4" strokeWidth={1.5} /> },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`p-5 text-center transition-all ${method === m.id ? 'bg-ink text-paper' : 'bg-paper text-stone hover:bg-line/30'}`}
                  >
                    <div className="flex justify-center mb-2">{m.icon}</div>
                    <span className="text-[11px]">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Card Payment */}
              {method === 'card' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" strokeWidth={1.5} />
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full pl-11 pr-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">CVV</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" strokeWidth={1.5} />
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full pl-11 pr-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="Name as shown on card"
                      className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm"
                    />
                  </div>
                </div>
              )}

              {/* Touch n Go */}
              {method === 'tng' && (
                <div className="space-y-6">
                  <div className="p-8 border border-line text-center">
                    <Wallet className="w-10 h-10 text-stone mx-auto mb-4" strokeWidth={1} />
                    <h3 className="font-serif text-lg text-ink mb-2">Touch n Go eWallet</h3>
                    <p className="text-stone text-sm mb-6">Scan the QR code or enter your TNG ID to complete payment</p>
                    <div className="w-48 h-48 bg-ink mx-auto mb-6 flex items-center justify-center">
                      <span className="text-paper text-xs">[QR CODE]</span>
                    </div>
                    <div className="max-w-xs mx-auto">
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3 text-left">TNG ID / Phone Number</label>
                      <input
                        type="text"
                        placeholder="e.g. 6012 345 6789"
                        className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Bank Transfer */}
              {method === 'bank' && (
                <div className="space-y-6">
                  <p className="text-stone text-sm">Select your bank and transfer the total amount to the account below. Upload your receipt to confirm.</p>
                  <div className="space-y-3">
                    {banks.map((bank, i) => (
                      <div key={i} className="p-5 border border-line hover:border-stone transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-serif text-ink">{bank.name}</span>
                          <span className="text-[10px] text-stone">{bank.account}</span>
                        </div>
                        <span className="text-xs text-stone">{bank.holder}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Upload Receipt</label>
                    <div className="border border-dashed border-line p-8 text-center hover:border-stone transition-all cursor-pointer">
                      <span className="text-sm text-stone">Drag and drop or click to upload</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Address */}
              <div className="border-t border-line pt-8">
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-6">Billing Details</span>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">First Name</label>
                      <input type="text" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm" />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Last Name</label>
                      <input type="text" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Email</label>
                    <input type="email" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Phone</label>
                    <input type="tel" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Address</label>
                    <input type="text" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm" />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">City</label>
                      <input type="text" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm" />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">State</label>
                      <input type="text" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm" />
                    </div>
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Postcode</label>
                      <input type="text" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Country</label>
                    <select className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm appearance-none">
                      <option>Malaysia</option>
                      <option>Singapore</option>
                      <option>Thailand</option>
                      <option>Indonesia</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-ink hover:bg-stone text-paper text-[12px] tracking-[0.12em] uppercase transition-all flex items-center justify-center gap-3"
              >
                <Lock className="w-4 h-4" strokeWidth={1.5} />
                Pay ${total > 0 ? total.toLocaleString() : '0'}
              </button>

              <div className="flex items-center justify-center gap-2 text-stone text-[11px]">
                <Shield className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>SSL Encrypted & PCI Compliant</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="border border-line p-8 sticky top-28">
              <h3 className="font-serif text-lg text-ink mb-6">Order Summary</h3>
              
              {items.length === 0 ? (
                <p className="text-stone text-sm">Your cart is empty. Add items from the marketplace.</p>
              ) : (
                <div className="space-y-4 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-line">
                      <div className="w-16 h-16 bg-line flex-shrink-0 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm text-ink truncate">{item.name}</h4>
                        <p className="text-xs text-stone">{item.brand}</p>
                        <p className="text-xs text-stone mt-1">Qty: {item.qty}</p>
                      </div>
                      <span className="font-serif text-sm text-ink">${(item.price * item.qty).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-3 pt-4 border-t border-line">
                <div className="flex justify-between text-sm">
                  <span className="text-stone">Subtotal</span>
                  <span className="text-ink">${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone">Shipping</span>
                  <span className="text-stone">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone">Tax</span>
                  <span className="text-stone">Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between pt-4 mt-4 border-t border-line">
                <span className="font-serif text-ink">Total</span>
                <span className="font-serif text-xl text-ink">${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
