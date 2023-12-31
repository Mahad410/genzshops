'use client'
import { useAuth } from '@/utils/context';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import Image from "next/image";
import Link from "next/link";
import { ProtectedRoutes } from "./protectedRoutes";
import { loadStripe } from '@stripe/stripe-js';
import secureLocalStorage from "react-secure-storage";
const stripePromise = loadStripe(
  process.env.STRIPE_SECRET_KEY
);


export default function Cart() {
  const { cartItems, setCartItems } = useAuth();

  const handleRemoveFromCart = (id, size) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id || item.size !== size);
    setCartItems(updatedCartItems);
    secureLocalStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <ProtectedRoutes>
        <p className="font-bold text-[2.5rem] md:text-[5rem] text-[--bg-intro-text] w-full relative">
          Shopping Cart
        </p>

        <div className="flex flex-col items-center justify-center mb-[100px]">
          {cartItems.length > 0 ? (
            <>
              <div className="w-full h-min relative">
                <div className="flex items-center justify-between border-2 p-4 mb-2">
                  <div className="w-11 mx-4">
                    <p className="text-lg font-bold text-center">No</p>
                  </div>
                  <div className="w-24 mx-4 cart">
                    <p className="text-lg font-bold text-center">Image</p>
                  </div>
                  <div className="w-max flex-grow mx-4">
                    <h2 className="text-lg font-bold">Name</h2>
                  </div>
                  <div className="w-11 mx-4">
                    <p className="text-lg font-bold text-center">Price</p>
                  </div>
                  <div className="w-11 mx-4">
                    <p className="text-lg font-bold text-center">Qty</p>
                  </div>
                  <div className="w-11 mx-4">
                    <p className="text-lg font-bold text-center">Total</p>
                  </div>
                  <div className="w-11 mx-4">
                    <p className="text-lg font-bold text-center">Del</p>
                  </div>
                </div>
                {cartItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between border-2 p-4 mb-4">
                    <div className="w-11 mx-4">
                      <p className="text-lg font-bold text-center">{index + 1}</p>
                    </div>
                    <div className="w-24 mx-4 cart">
                      <Image src={item.thumbnail} width={96} height={96} alt={item.name} />
                    </div>
                    <div className="w-max flex-grow mx-4">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-sm">{item.size}</p>
                    </div>
                    <div className="w-11 mx-4">
                      <p className="text-lg font-bold text-center">{item.price}</p>
                    </div>
                    <div className="w-11 mx-4">
                      <p className="text-lg font-bold text-center">{item.quantity}</p>
                    </div>
                    <div className="w-11 mx-4">
                      <p className="text-lg font-bold text-center">{item.price * item.quantity}</p>
                    </div>
                    <div className="tooltip" data-tip="delete">
                      <button className="rounded-lg icon-btn w-11 mx-4" onClick={() => handleRemoveFromCart(item.id, item.size)}>
                        <HighlightOffTwoToneIcon className="icon text-[#ec5353]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="fixed bottom-0 w-[100%] h-min bg-[white] px-[40px] py-4">
                <div className="flex items-center justify-between border-2 p-4 mb-2">
                  <div className="w-max mx-4">
                    <p className="text-lg font-bold">Sub Total</p>
                  </div>
                  <div className="w-11 mx-4">
                    <p className="text-lg font-bold">{subtotal}</p>
                  </div>
                </div>
                <div className="join w-full flex items-center justify-around mt-5 m-1">
                  <Link href="/products" className="w-[65%]">
                    <button type="button" className="btn btn-lg w-full">
                      Go back to Shopping
                    </button>
                  </Link>
                  <button type="button" className="btn btn-active btn-neutral btn-lg w-[30%]">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="font-bold text-[2rem] md:text-[3rem] text-[--bg-intro-text] w-full text-center">Your cart is empty.</p>
              <Link href="/products">
                <button type="button" className="btn btn-neutral btn-lg w-full my-5">
                  Go to Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </ProtectedRoutes>
    </>
  );
}