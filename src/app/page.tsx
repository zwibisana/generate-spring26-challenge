"use client";
import React, { useEffect, useState } from "react";
import stolenItems from "./stolenItems.json";
import ItemDetail from "./item-detail/ItemDetail";
import HeroSection from "./gallery/HeroSection";
import RedBanner from "./gallery/RedBanner";
import { Pagination } from "./gallery/Pagination";
import { ItemGrid } from "./gallery/ItemGrid";
import Footer from "./gallery/Footer";

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
    /*
    * Google Material Icons Rounded Library
    */
    const materialIconsLink = document.createElement("link");
    materialIconsLink.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    materialIconsLink.rel = "stylesheet";
    document.head.appendChild(materialIconsLink);

    /*
    * Google Fonts IBM Plex Mono
    */
    const ibmPlexMonoLink = document.createElement("link");
    ibmPlexMonoLink.href =
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";
    ibmPlexMonoLink.rel = "stylesheet";
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
    return <ItemDetail item={selectedItem} onBack={handleBackToGallery} />;
  }

  return (
    <div>
      <div className="relative bg-[#18181a] border-solid outline outline-[#27272A]">
        <div className="absolute top-0 left-0 right-0 flex justify-between px-2 py-1">
          <div
            onClick={() => {
              const item = stolenItems.find(
                (item: StolenItem) => item.id === "074224"
              );
              if (item) {
                handleItemClick(item);
              }
            }}
            className="flex items-center h-[26px] px-2 text-[12px] text-[#00C950] bg-[#27272A] outline border-solid outline-[#3F3F46] cursor-pointer hover:bg-[#3F3F46] duration-200"
          >
            <span className="material-symbols-rounded !text-[24px] text-[#00C950]">
              check_small
            </span>
            VERIFIED
          </div>
          <div
            onClick={() => {
              const item = stolenItems.find(
                (item: StolenItem) => item.id === "999217"
              );
              if (item) {
                handleItemClick(item);
              }
            }}
            className="h-[26px] cursor-pointer px-2 text-[12px] font-bold bg-[#E7000B] flex items-center justify-center border-solid outline outline-[#FB2C36] hover:bg-[#C10007]"
          >
            HOT
          </div>
        </div>

        <div className="text-center text-[#71717B] px-2 py-[6px] text-[12px] tracking-[0.3] font-medium">
          *** VERIFIED SELLERS ONLY *** 100% ANONYMOUS *** NO TRACKING *** FAST
          SHIPPING WORLDWIDE ***
        </div>
      </div>

      <div className="mx-[30px] md:mx-[100px] mt-10 flex flex-col gap-y-10">
        <HeroSection/>
        <RedBanner/>
        <ItemGrid items={currentItems} onSelect={setSelectedItem} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={() => setCurrentPage(p => Math.max(p - 1, 1))}
          onNext={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          onSelect={setCurrentPage}
        />
        <Footer/>
      </div>
    </div>
  );
}

export default App;