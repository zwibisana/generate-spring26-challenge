"use client"
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import stolenItems from './stolenItems.json';
import ItemDetail from "./components/itemDetail";

export interface StolenItem {
  id: string;
  item_name: string;
  item_price: number;
  item_photo_url: string;
  item_description: string;
  item_stock: number;
  seller_username: string;
  seller_country: string;
  seller_city: string;
}

function App() {
  useEffect(() => {
    // Material Icons Rounded
    const materialIconsLink = document.createElement('link');
    materialIconsLink.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    materialIconsLink.rel = 'stylesheet';
    document.head.appendChild(materialIconsLink);

    // IBM Plex Mono font
    const ibmPlexMonoLink = document.createElement('link');
    ibmPlexMonoLink.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";
    ibmPlexMonoLink.rel = 'stylesheet';
    document.head.appendChild(ibmPlexMonoLink);
  }, []);
  
  const [selectedItem, setSelectedItem] = useState<StolenItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleItemClick = (item: StolenItem) => {
    setSelectedItem(item);
  };

  const handleBackToGallery = () => {
    setSelectedItem(null);
  };

  // Calculate pagination
  const totalPages = Math.ceil(stolenItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = stolenItems.slice(startIndex, endIndex);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  if (selectedItem) {
    return (
      <ItemDetail 
        item={selectedItem} 
        onBack={handleBackToGallery}
      />
    );
  }

  return (
    <div>
      <div className="relative bg-[#18181a] border-solid outline outline-[#27272A]">
        <div className="absolute top-0 left-0 right-0 flex justify-between px-2 py-1">
          <div className="flex items-center h-[26px] px-2 text-[12px] text-[#00C950] bg-[#27272A] outline border-solid outline-[#3F3F46]">
            <span className="material-symbols-rounded !text-[24px] text-[#00C950]">check_small</span>VERIFIED
          </div>
          <div className="h-[26px] px-2 text-[12px] font-bold bg-[#e60010] flex items-center justify-center border-solid outline outline-[#FB2C36]">HOT
          </div>
        </div>

        <div className="text-center text-[#71717B] py-[6px] text-[12px] tracking-[0.3] font-medium">
          *** VERIFIED SELLERS ONLY *** 100% ANONYMOUS *** NO TRACKING *** FAST SHIPPING WORLDWIDE *** HOT DEALS
        </div>
      </div>


      <div className="mx-[40px] md:mx-[100px] mt-10 flex flex-col gap-y-10">
        
        {/* Header Block */}
        <div className="relative header bg-[#18181B] border border-[#27272A] p-10 rounded-[2px]">
          <h1 className="text-left text-[48px] font-bold uppercase tracking-[2.4]">The Dark Vault</h1>
          <h3 className="text-left text-[14px] text-[#71717B] tracking-[1.4]">STOLEN GOODS • NO QUESTIONS ASKED • CRYPTO ONLY</h3>
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="flex items-center gap-1 px-2 py-1 text-[12px] text-[#9F9FA9] bg-[#27272A] outline-[#3F3F46] border-solid outline"><span className="material-symbols-rounded !text-[16px]">shield</span>SECURE</div>
            <div className="flex items-center gap-1 px-2 py-1 text-[12px] text-[#9F9FA9] bg-[#27272A] outline-[#3F3F46] border-solid outline"><span className="material-symbols-rounded !text-[16px]">bolt</span>INSTANT</div>
            <div className="flex items-center gap-1 px-2 py-1 text-[12px] text-[#00C950] bg-[#27272A] outline-[#3F3F46] border-solid outline"><span className="material-symbols-rounded !text-[16px]">visibility</span>3,847 ONLINE</div>
          </div>

          <div className="absolute top-[-4px] right-[-4px] rotate-[.1rad]">
            <div className="px-4 py-2 text-[12px] font-bold bg-[#e60010] flex items-center justify-center border-solid outline outline-[#FB2C36]">HOT DEALS</div>
          </div>
        </div>

        {/* Red Text */}
        <div className="bg-[#460a08] py-2 border-solid outline outline-[#82181A] text-[#FF6467] text-[12px]">
          <p className="text-center">★ LIMITED TIME OFFERS ★ BUY NOW ★ ANONYMOUS PAYMENT ★ WORLDWIDE SHIPPING ★</p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {currentItems.map((item: StolenItem) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group card cursor-pointer bg-[#18181B] border-solid outline-[#27272A] group-hover:outline-[#656565] outline text-center"
            >
              {/* Image wrapper */}
              <div className="overflow-hidden">
                <img
                  src={item.item_photo_url}
                  alt={item.item_name}
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mx-[16px] my-[16px] flex flex-col gap-y-4">

                <div className="flex flex-col gap-y-1">
                  <h3 className="uppercase text-left text-[14px] font-medium">{item.item_name}</h3>
                  <div className="flex items-center gap-1 text-[#71717B]"><span className="material-symbols-rounded !text-[16px]">person</span>
                    <h2 className="text-left text-[12px]">{item.seller_username}</h2>
                  </div>
                  <div className="flex items-center gap-1 text-[#52525C]"><span className="material-symbols-rounded !text-[16px]">location_on</span>
                    <h2 className="text-left text-[12px]">{item.seller_city}, {item.seller_country}</h2>
                  </div>
                </div>

                <div className="bg-[#09090B] flex items-center justify-between p-[12px] outline border-solid outline-[#27272A]">
                  <div>
                    <p className="text-left text-[18px] font-bold text-[#FF6467]">${item.item_price.toLocaleString()}</p>
                    <div className="flex items-center gap-1 text-[#71717B]"><span className="material-symbols-rounded !text-[16px]">trending_up</span>
                    <h2 className="text-left text-[12px]">BEST PRICE</h2>
                    </div>
                  </div>
                  <div className="inline-flex items-center px-2 h-[26px] border border-[#82181A] bg-[#460809]">
                    <p className="text-[#FF6467] font-bold text-[12px]">{item.item_stock} LEFT</p>
                  </div>
                </div>

                <button
                  onClick={() => handleItemClick(item)}
                  className="bg-[#272729] duration-200 text-[12px] text-[#9F9FA9] border-solid outline outline-[#3F3F46] uppercase cursor-pointer w-full py-2 hover:bg-[#3F3F46]"
                >
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Pagination */}
        <div className="flex justify-center align-center gap-[6px] p-[20px]">
          <div className={`flex items-center gap-1 py-2 px-5 ${currentPage === 1
                ? "bg-[#121214] text-[#272729] cursor-not-allowed"
                : "bg-[#27272A] border-solid outline outline-[#3F3F46] duration-200 hover:bg-[#3F3F46] cursor-pointer"}
              `}><span className="material-symbols-rounded !text-[16px]">chevron_left</span>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="text-[12px]">
              PREVIOUS
            </button>
          </div>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`py-2 px-4 cursor-pointer text-[12px]
              ${currentPage === page
              ? "bg-[#155DFC] border-solid outline outline-[#2B7FFF] text-white font-bold"
              : "bg-[#27272A] border-solid outline outline-[#3F3F46] duration-200 hover:bg-[#3F3F46] cursor-pointer"}
              `}
            >
              {page}
            </button>
          ))}
          <div className={`flex items-center gap-1 py-2 px-5 ${currentPage === totalPages
                ? "bg-[#121214] text-[#272729] cursor-not-allowed"
                : "bg-[#27272A] border-solid outline outline-[#3F3F46] duration-200 hover:bg-[#3F3F46] cursor-pointer"}
              `}>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="text-[12px]">
              NEXT
            </button>
            <span className="material-symbols-rounded !text-[16px]">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// export default function Home() {
//   return (
//     <div>
      
//     </div>
//   );
// }
