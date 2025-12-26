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
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="bg-black p-7 rounded-md max-w-[500px] w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{item_name}</h2>
        <img
          src={item_photo_url}
          alt={item_name}
          className="w-full h-48 object-cover rounded my-5"
        />
        <p>{item_description}</p>
        <p><strong>Price:</strong> ${item_price.toLocaleString()}</p>
        <p><strong>Stock Available:</strong> {item_stock}</p>

        <div className="flex items-center gap-[15px]">
          <label><strong>Quantity:</strong></label>
          <button
            onClick={handleDecrease}
            disabled={quantity <= 1}
            className={`py-1.5 px-4.5 text-lg 
            ${quantity <= 1 ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            -
          </button>
          <span className="text-lg min-w-[30px] text-center">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            disabled={quantity >= item_stock}
            className={`py-1.5 px-4.5 text-lg
            ${quantity >= item_stock ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            +
          </button>
        </div>
        
        {/* Total Cost */}
        <div>
          <p className="font-[20px] font-bold">
            Total: ${total_cost.toLocaleString()}
          </p>
        </div>
        
        {/* Cancel and Confirm Buttons */}
        <div className="flex gap-2.5 justify-end">
          <button
            onClick={onClose}
            className="py-2.5 px-5 bg-gray-300 rounded cursor-pointer border-none"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmPurchase}
            className="py-2.5 px-5 bg-blue-500 text-white rounded cursor-pointer border-none"
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseModal;