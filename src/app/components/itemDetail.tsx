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
    <div className="mb-10">
      <div className="text-center text-[#71717B] bg-[#18181a] py-[6px] text-[12px] tracking-[0.3] font-medium border-solid outline outline-[#27272A]">
        <p>★ LIMITED TIME OFFER ★ ACT FAST ★ ONLY {item.item_stock} LEFT ★</p>
      </div>

      <div className="md:mx-[150px] mx-[50px] mt-12">

        {/* Back to Gallery Button */}
        <div className="flex flex-row inline-flex items-center gap-x-1 p-3 text-[14px] text-[#9F9FA9] bg-[#18181B] outline-[#27272A] border-solid outline hover:text-[#FFFFFF] hover:outline-[#414146] duration-200"><span className="material-symbols-rounded !text-[16px]">west</span>
            <button onClick={onBack} className="uppercase">Back to Deals</button>
        </div>
        
        {/* Red Text */}
        <div className="mt-6 bg-[#460a08] py-2 border-solid outline outline-[#82181A] text-[#FF6467] text-[14px]">
            <p className="text-center">⚠ WARNING: 47 PEOPLE VIEWING THIS RIGHT NOW</p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">

        {/* Left side: Image + Review */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div className="relative w-full">
                <img 
                    src={item.item_photo_url} 
                    alt={item.item_name} 
                    className="w-full h-auto object-cover border-solid outline outline-[#27272A]"
                />

                {/* Verified badge */}
                <div className="absolute top-2 right-2">
                    <div className="flex flex-row h-[26px] px-2 text-[12px] items-center text-center text-[#00C950] bg-[#262729] border-solid outline outline-[#27272A]"><span className="material-symbols-rounded !text-[24px] text-[#00C950]">check_small</span>VERIFIED</div>
                </div>
            </div>

            {/* Review */}
            <div className="text-[#71717B] text-[14px] text-center p-4 md:text-left bg-[#18181B] border-solid outline outline-[#27272A] w-full">
                <div className="flex flex-row gap-x-2">
                    <div>
                        <span className="material-symbols-rounded !text-[14px] text-[#F0B100]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>star</span>
                        <span className="material-symbols-rounded !text-[14px] text-[#F0B100]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>star</span>
                        <span className="material-symbols-rounded !text-[14px] text-[#F0B100]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>star</span>
                        <span className="material-symbols-rounded !text-[14px] text-[#F0B100]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>star</span>
                        <span className="material-symbols-rounded !text-[14px] text-[#F0B100]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>star</span>
                    </div>
                    <p className="text-[12px] text-[#9F9FA9]">4.9/5.0 (2,847 REVIEWS)</p>
                </div>
                <p className="italic text-[12px] text-[#71717B]">"Best seller ever!!! Fast shipping no problems!!!!" - Anonymous_Buyer_88</p>
            </div>
        </div>

        {/* Right side: Information */}
        <div className="flex-1 min-w-[350px] flex flex-col gap-6">
            <div className="flex flex-col gap-y-3 p-6 bg-[#18181B] border-solid outline outline-[#27272A]">
                <h1 className="uppercase text-[24px] font-bold">{item.item_name}</h1>
                <div className="flex-row flex gap-x-3">
                    <div className="flex inline-flex text-center items-center px-2 h-[22px] text-[#FF6467] bg-[#460809] outline border-solid outline-[#82181A]"><p className="text-[12px]">HOT</p></div>
                    <div className="flex inline-flex text-center items-center px-2 h-[22px] text-[#00C950] bg-[#27272A] outline border-solid outline-[#3F3F46]"><p className="text-[12px]">VERIFIED</p></div>
                    <div className="flex inline-flex text-center items-center px-2 h-[22px] text-[#9F9FA9] bg-[#27272A] outline border-solid outline-[#3F3F46]"><p className="text-[12px]">TRUSTED</p></div>
                </div>
                <p className="text-[14px] text-[#9F9FA9]">{item.item_description}</p>
            </div>

            <div className="bg-[#18181B] p-4 border-solid outline outline-[#27272A] flex flex-col gap-y-4">
                <div className="flex flex-row items-center justify-between pb-6 border-b border-solid border-b-[#27272A]">
                    <p className="text-[14px] text-[#71717B]">PRICE:</p>
                    <div>
                        <p className="text-left text-[30px] font-bold text-[#FF6467]">${item.item_price.toLocaleString()}</p>
                        <p className="text-[12px] text-[#52525C] text-right">LOWEST ON MARKET</p>
                    </div>
                </div>

                <div className="flex flex-row gap-x-4 items-center bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
                    <div><span className="material-symbols-rounded !text-[20px] text-[#52525C]">person</span></div>
                    <div>
                        <p className="text-[12px] text-[#52525C] uppercase">SELLER:</p>
                        <p className="text-[14px]">{item.seller_username}</p>
                        <p className="text-[12px] text-[#F0B100]">⭐⭐⭐⭐⭐ 100% POSITIVE</p>
                    </div>
                </div>

                <div className="flex flex-row gap-x-4 items-center bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
                    <div><span className="material-symbols-rounded !text-[20px] text-[#52525C]">location_on</span></div>
                    <div>
                        <p className="text-[12px] text-[#52525C] uppercase">SHIPS FROM:</p>
                        <p className="text-[14px]">{item.seller_city}, {item.seller_country}</p>
                    </div>
                </div>

                <div className="flex flex-row gap-x-4 items-center bg-[#09090B] p-3 border-solid outline outline-[#27272A]">
                    <div><span className="material-symbols-rounded !text-[20px] text-[#52525C]">location_on</span></div>
                    <div>
                        <p className="text-[12px] text-[#52525C] uppercase">IN STOCK:</p>
                        <p className="text-[18px] font-bold text-[#FF6467]">ONLY {item.item_stock} LEFT</p>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="flex flex-col text-[12px] w-full px-6 text-center text-[#71717B] bg-[#09090B] p-3 border-solid outline outline-[#27272A]"><span className="material-symbols-rounded !text-[24px] text-[#71717B]">shield</span>SECURE</div>
                    <div className="flex flex-col text-[12px] w-full px-6 text-center text-[#71717B] bg-[#09090B] p-3 border-solid outline outline-[#27272A]"><span className="material-symbols-rounded !text-[24px] text-[#71717B]">bolt</span>INSTANT</div>
                    <div className="flex flex-col text-[12px] w-full px-6 text-center text-[#71717B] bg-[#09090B] p-3 border-solid outline outline-[#27272A]"><span className="material-symbols-rounded !text-[24px] text-[#F0B100]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>star</span>RATED</div>
                </div>

            </div>

            <button
            onClick={handleBuyNow}
            className="py-4 w-full text-[20px] font-bold bg-[#E7000B] outline border-solid outline-[#FB2C36] text-white cursor-pointer hover:bg-[#C10007]"
            >
            ★ BUY NOW ★
            </button>

            <div className="flex flex-row gap-x-2 bg-[#18181a] p-4 border-solid outline outline-[#82181A]">
                <span className="material-symbols-rounded !text-[30px] font-bold text-[#FF6467]">warning</span>
                <div>
                    <p className="text-[16px] font-bold text-[#FF6467]">WARNING</p>
                    <p className="text-[14px] text-[#9F9FA9]">LAST CHANCE! PRICES GOING UP SOON! NO REFUNDS! FINAL SALE!</p>
                </div>
            </div>

        </div>

        </div>


        {/* Bottom Information */}
        <div className="mt-10 p-6 bg-[#18181B] border-solid outline outline-[#27272A]">
            <p className="text-[16px] font-bold uppercase mb-4">⚠ Important Info</p>
            <div className="flex flex-col gap-y-2">
                <p className="text-[14px] text-[#71717B]">★ BITCOIN/MONERO ONLY - NO REFUNDS</p>
                <p className="text-[14px] text-[#71717B]">★ ENCRYPTED DELIVERY - UNTRACEABLE</p>
                <p className="text-[14px] text-[#71717B]">★ NO CONTACT - ANONYMOUS DROPOFF</p>
                <p className="text-[14px] text-[#71717B]">★ DELETE BROWSER HISTORY AFTER PURCHASE</p>
                <p className="text-[14px] text-[#71717B]">★ USE TOR BROWSER RECOMMENDED</p>
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