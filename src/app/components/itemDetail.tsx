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
    <div className="">
      <div className="text-center text-[#71717B] bg-[#18181a] py-[6px] text-[12px] tracking-[0.3] font-medium border-solid outline outline-[#27272A]">
        <p>★ LIMITED TIME OFFER ★ ACT FAST ★ ONLY {item.item_stock} LEFT ★</p>
      </div>

      <div className="md:mx-[150px] mx-[50px] mt-12">

        {/* Back to Gallery Button */}
        <div className="flex flex-row inline-flex items-center gap-x-1 p-3 text-[14px] text-[#9F9FA9] bg-[#18181B] outline-[#27272A] border-solid outline"><span className="material-symbols-rounded !text-[16px]">west</span>
            <button onClick={onBack} className="uppercase">Back to Deals</button>
        </div>
        
        {/* Red Text */}
        <div className="mt-6 bg-[#460a08] py-2 border-solid outline outline-[#82181A] text-[#FF6467] text-[14px]">
            <p className="text-center">⚠ WARNING: 47 PEOPLE VIEWING THIS RIGHT NOW</p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">

        {/* Left side: Image + Review */}
        <div className="flex flex-col items-center md:items-start gap-4">
            <img 
            src={item.item_photo_url} 
            alt={item.item_name} 
            className="w-full h-auto object-cover rounded-md"
            />

            {/* Review */}
            <div className="text-[#71717B] text-[14px] text-center md:text-left">
            This is an amazing product!
            </div>
        </div>

        {/* Right side: Information */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-6">
            <div className="flex flex-col gap-y-3 p-6 bg-[#18181B] border-solid outline outline-[#27272A]">
                <h1 className="uppercase text-[24px] font-bold">{item.item_name}</h1>
                <div className="flex-row flex gap-x-3">
                    <div className="flex inline-flex text-center items-center px-2 h-[22px] text-[#FF6467] bg-[#460809] outline border-solid outline-[#82181A]"><p className="text-[12px]">HOT</p></div>
                    <div className="flex inline-flex text-center items-center px-2 h-[22px] text-[#00C950] bg-[#27272A] outline border-solid outline-[#3F3F46]"><p className="text-[12px]">VERIFIED</p></div>
                    <div className="flex inline-flex text-center items-center px-2 h-[22px] text-[#9F9FA9] bg-[#27272A] outline border-solid outline-[#3F3F46]"><p className="text-[12px]">TRUSTED</p></div>
                </div>
                <p className="text-[14px] text-[#9F9FA9]">{item.item_description}</p>
            </div>

            <div className="bg-[#18181B] p-4 border-solid outline outline-[#27272A]">
                <div className="flex flex-row justify-between pb-6 border-b border-solid border-b-[#27272A]">
                    <p className="text-[14px] text-[#71717B]">PRICE:</p>
                    <div>
                        <p className="text-left text-[18px] font-bold text-[#FF6467]">${item.item_price.toLocaleString()}</p>
                        <p className="text-[12px] text-[#52525C]">LOWEST ON MARKET</p>
                    </div>
                </div>
            </div>

            <button
            onClick={handleBuyNow}
            className="py-3 w-full text-[20px] font-bold bg-[#E7000B] text-white cursor-pointer"
            >
            ★ BUY NOW ★
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
    
    </div>
  );
}

export default ItemDetail;