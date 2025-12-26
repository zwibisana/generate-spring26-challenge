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

  // Shows confirmation modal, will automatically close in 10 seconds.
  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showConfirmation, onClose]);

  if (showConfirmation) {
    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]">
        <div className="bg-black p-8 rounded-lg max-w-[500px] text-center">
          <h2>Order Confirmed!</h2>
          <p><strong>Item:</strong> {item_name}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Total Cost:</strong> ${total_cost.toLocaleString()}</p>
          <p><strong>Order Number:</strong> {orderNumber}</p>
          <p className="mt-5 text-gray-500">
            This window will close automatically in 10 seconds...
          </p>
          <button
            onClick={onReturnToGallery}
            className="mt-5 py-2.5 px-5 hover:bg-blue-300 bg-blue-500 text-white rounded text-base cursor-pointer border-none"
          >
            Return Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]"onClick={onClose}>

        <div className="flex flex-col gap-y-4 bg-[#18181a] p-7 w-[448px] w-[90%] border-solid outline outline-[#27272A]" onClick={(e) => e.stopPropagation()}>
        
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-x-2">
                <span className="material-symbols-rounded !text-[24px] font-bold text-[#FF6467]">warning</span>
            <p className="text-[18px] font-bold text-[#FF6467]">CHECKOUT</p>
            </div>
            <button
                onClick={onClose}
                className="group group-hover:outline-[#FFFFFF] duration-200 flex items-center justify-center bg-[#272729] p-3 border-solid outline outline-[#3F3F46] h-[42px] w-[42px]">
                <span className="material-symbols-rounded !text-[24px] font-bold text-[#71717B] duration-200 group-hover:text-[#FFFFFF]">close</span>
            </button>
            </div>

        <div className="mt-6 bg-[#460a08] py-2 border-solid outline outline-[#82181A] text-[#FF6467] text-[12px]">
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