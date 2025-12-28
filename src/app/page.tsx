"use client";
import React, { useEffect, useState } from "react";
import stolenItems from "./stolenItems.json";
import ItemDetail from "./item-detail/ItemDetail";
import HeroSection from "./gallery/HeroSection";
import RedBanner from "./gallery/RedBanner";
import { Pagination } from "./gallery/Pagination";
import { ItemGrid } from "./gallery/ItemGrid";
import Footer from "./gallery/Footer";
import TopBanner from "./gallery/TopBanner";

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
  const totalPages = Math.ceil(stolenItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = stolenItems.slice(startIndex, endIndex);
  const handleBackToGallery = () => {
    setSelectedItem(null);
  };

  /*
  * If an item from the gallery is selected, render the selected item detail page.
  */
  if (selectedItem) {
    return <ItemDetail item={selectedItem} onBack={handleBackToGallery} />;
  }

  return (
    <div>
      <TopBanner
        items={stolenItems}
        onSelect={setSelectedItem}
        verifiedId="074224"
        hotId="999217"
      />
      <div className="mx-[30px] md:mx-[100px] mt-10 flex flex-col gap-y-10">
        <HeroSection />
        <RedBanner />
        <ItemGrid items={currentItems} onSelect={setSelectedItem} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          onSelect={setCurrentPage}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
