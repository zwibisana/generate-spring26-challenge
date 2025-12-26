import React, { useState, useEffect } from 'react';

interface PurchaseModalProps {
    id: string;
    item_name: string;
    item_price: number;
    item_photo_url: string;
    item_description: string;
    item_stock: number;
    seller_username: string;
    seller_country: string;
    seller_city: string;
    onClose: () => void;
    onReturnToGallery: () => void;
}

function PurchaseModal({
  id,
  item_name,
  item_price,
  item_photo_url,
  item_description,
  item_stock,
  seller_username,
  seller_country,
  seller_city,
  onClose,
  onReturnToGallery,
}: PurchaseModalProps) {
  // The default quantity is 1.
  const [quantity, setQuantity] = useState(1);
  // The default state is to not show confirmation.
  const [showConfirmation, setShowConfirmation] = useState(false);
  // The default state is to not have an order number.
  const [orderNumber, setOrderNumber] = useState('');
  // Countdown timer starting at 10 seconds
  const [countdown, setCountdown] = useState(10);

  // Storing the total cost of the purchase. 
  const total_cost = item_price * quantity;

  // Handles any increase to the quantity, and it must be less than the item_stock.
  const handleIncrease = () => {
    if (quantity < item_stock) {
      setQuantity(quantity + 1);
    }
  };

  // Handles any decrease to the quantity, and it must be greater than 0.
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Creates a random confirmation number, and sets it for the order number.
  // Enables the visibility of ShowConfirmation. 
  const handleConfirmPurchase = () => {
    const confirmationNumber = Math.random().toString(36).substring(2, 15).toUpperCase();
    setOrderNumber(confirmationNumber);
    setShowConfirmation(true);
  };

  // Shows confirmation modal, will automatically close in 10 seconds with countdown.
  useEffect(() => {
    if (showConfirmation) {
      // Reset countdown when confirmation is shown
      setCountdown(10);
      
      // Countdown interval that decrements every second
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            onReturnToGallery();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [showConfirmation, onReturnToGallery]);

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 bg-black flex justify-center items-center z-[1000]">
        <div className="bg-[#18181B] flex flex-col gap-y-4 border-solid outline outline-[#27272A] p-8 w-[448px] text-center">
          <div>
          <span className="material-symbols-rounded !text-[64px] font-bold text-[#00C950]">task_alt</span>
          </div>
          <div>
            <h2 className="uppercase text-[16px]">Transaction Confirmed</h2>
            <p className="text-[16px] text-[#71717B]">Order #{orderNumber}</p>
          </div>

          <div className="flex flex-col gap-y-4 bg-[#09090B] border-solid outline outline-[#27272A] p-4">
            <div className="flex flex-row justify-between items-center">
                <p className="text-[12px] text-[#71717B]">Item:</p>
                <div className="text-[12px]">{item_name}</div>
            </div>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[12px] text-[#71717B]">Quantity:</p>
                <div className="text-[12px]">{quantity}</div>
            </div>
            <div className="flex flex-row justify-between items-center pt-4 border-t border-solid border-t-[#27272A]">
                <p className="text-[12px] text-[#9F9FA9]">TOTAL:</p>
                <div className="text-[18px] font-bold text-[#FF6467]">${total_cost.toLocaleString()}</div>
            </div>
          </div>

        
          <div className="items-center flex flex-row gap-x-2 w-full justify-center">
            <span className="material-symbols-rounded !text-[12px] text-[#71717B]">timer</span>
            <p className="text-[#71717B] text-center text-[12px]">
                Returning in {countdown}s
            </p>
          </div>

          <button
            onClick={onReturnToGallery}
            className="bg-[#272729] duration-200 text-[12px] text-[#9F9FA9] border-solid outline outline-[#3F3F46] uppercase cursor-pointer w-full py-2 hover:bg-[#3F3F46]"
          >
            Return Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[1000]"onClick={onClose}>

        <div className="flex flex-col gap-y-4 bg-[#18181a] p-7 w-[448px] border-solid outline outline-[#27272A]" onClick={(e) => e.stopPropagation()}>
        
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
                <span className="material-symbols-rounded !text-[24px] font-bold text-[#FF6467]">warning</span>
            <p className="text-[18px] font-bold text-[#FF6467]">CHECKOUT</p>
            </div>
            <button
                onClick={onClose}
                className="group group-hover:outline-[#FFFFFF] duration-200 w-[38px] h-[38px] flex items-center justify-center bg-[#272729] p-3 border-solid outline outline-[#3F3F46] h-[42px] w-[42px]">
                <span className="material-symbols-rounded !text-[22px] font-bold text-[#71717B] duration-200 group-hover:text-[#FFFFFF]">close</span>
            </button>
            </div>

        <div className="bg-[#460a08] py-2 border-solid outline outline-[#82181A] text-[#FF6467] text-[12px]">
            <p className="text-center">★ LIMITED TIME OFFER ★</p>
        </div>

        <div className="bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
            <p className="text-[12px] text-[#52525C] uppercase">ITEM:</p>
            <p className="text-[14px]">{item_name}</p>
        </div>

        <div className="bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
            <p className="text-[12px] text-[#52525C] uppercase">SELLER:</p>
            <p className="text-[14px]">{seller_username}</p>
            <p className="text-[12px] text-[#F0B100]">⭐⭐⭐⭐⭐ VERIFIED</p>
        </div>

        <div className="bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
            <p className="text-[12px] text-[#52525C] uppercase">SHIPPING FROM:</p>
            <p className="text-[14px]">{seller_city}, {seller_country}</p>
        </div>

        <div className="flex flex-col items-left bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
        <label className="text-[12px] text-[#52525C] uppercase mb-2">QUANTITY:</label>
         <div className="flex flex-row items-center gap-x-4">
          <button
            onClick={handleDecrease}
            disabled={quantity <= 1}
            className={`flex items-center justify-center bg-[#272729] p-3 border-solid outline outline-[#3F3F46] h-[42px] w-[42px]
            ${quantity <= 1 ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#3F3F46] duration-200"}`}
          >
            <span className="material-symbols-rounded !text-[20px] text-[#FFFFFF]">remove</span>
          </button>
          <span className="flex items-center w-[80px] justify-center bg-[#000000] p-3 border-solid outline outline-[#27272A] h-[42px] w-[42px]">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            disabled={quantity >= item_stock}
            className={`flex items-center justify-center bg-[#272729] p-3 border-solid outline outline-[#3F3F46] h-[42px] w-[42px]
            ${quantity >= item_stock ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#3F3F46] duration-200"}`}
          >
            <span className="material-symbols-rounded !text-[20px] text-[#FFFFFF]">add</span>
          </button>
          <p className="text-[#71717B]">/ {item_stock}</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
            <div className="flex flex-row justify-between items-center">
                <p className="text-[14px] text-[#71717B] uppercase">TOTAL COST:</p>
                <p className="text-left text-[24px] font-bold text-[#FF6467]">${total_cost.toLocaleString()}</p>
            </div>
            <button
            onClick={handleConfirmPurchase}
            className="py-4 w-full text-[20px] font-bold bg-[#E7000B] outline border-solid outline-[#FB2C36] text-white cursor-pointer hover:bg-[#C10007]"
            >
            ★ CONFIRM PURCHASE ★
          </button>
        </div>

        <div className="flex flex-row gap-x-2 px-4 py-3 border-solid outline outline-[#82181A]">
            <span className="material-symbols-rounded !text-[20px] text-[#FF6467]">skull</span>
            <p className="text-[12px] font-bold">ALL SALES FINAL! NO REFUNDS! NO TRACKING! CRYPTO ONLY!</p>
        </div>

        <p className="text-[12px] text-[#3F3F46] text-center">By clicking confirm you agree to all terms</p>

      </div>
    </div>
  );
}

export default PurchaseModal;