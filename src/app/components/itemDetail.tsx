"use client"
import React, { useState } from 'react';
import { StolenItem } from '../page';
import PurchaseModal from './purchaseModal';

interface ItemDetailProps {
  item: StolenItem;
  onBack: () => void;
}

function ItemDetail({ item, onBack }: ItemDetailProps) {
  const [showModal, setShowModal] = useState(false);

  const handleBuyNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-5 max-w-[800px] mx-auto">
      <button onClick={onBack} className="mb-[20px]">
        ← Back to Gallery
      </button>
      
      <div className="flex gap-7 mb-5">
        <img
          src={item.item_photo_url}
          alt={item.item_name}
          className="w-[400px] h-[400px] object-cover rounded-md"
        />
        <div>
          <h1>{item.item_name}</h1>
          <p className="text-2xl font-bold my-5">
            ${item.item_price.toLocaleString()}
          </p>
          <p className="mb-[20px]">{item.item_description}</p>
          
          <div className="mb-[20px]">
            <p><strong>Stock:</strong> {item.item_stock}</p>
            <p><strong>Seller:</strong> {item.seller_username}</p>
            <p><strong>Location:</strong> {item.seller_city}, {item.seller_country}</p>
          </div>
          
          <button
            onClick={handleBuyNow}
            className="py-3 px-6 text-base bg-blue-500 text-white rounded cursor-pointer border-none"
          >
            Buy Now
          </button>
        </div>
      </div>

      {showModal && (
        <PurchaseModal
          id={item.id}
          item_name={item.item_name}
          item_price={item.item_price}
          item_photo_url={item.item_photo_url}
          item_description={item.item_description}
          item_stock={item.item_stock}
          seller_username={item.seller_username}
          seller_country={item.seller_country}
          seller_city={item.seller_city}
          onClose={handleCloseModal}
          onReturnToGallery={onBack}
        />
      )}
    </div>
  );
}

export default ItemDetail;