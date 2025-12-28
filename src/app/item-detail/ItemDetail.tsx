"use client";
import React, { useState } from "react";
import { StolenItem } from "../page";
import { Banner } from "./Banner";
import { BackButton } from "./BackButton";
import { ItemImage } from "./ItemImage";
import { ItemReview } from "./ItemReview";
import { ItemInfoCard } from "./ItemInfoCard";
import { ImportantInfo } from "./ImportantInfo";
import { WarningBanner } from "./WarningBanner";
import { WarningInfo } from "./WarningInfo";
import { ItemNameCard } from "./ItemNameCard";
import PurchaseModal from "../purchase-modal/PurchaseModal";

/*
 * ItemDetail
 *
 * Displays a detailed product view for a single stolen item, including
 * pricing, seller information, urgency banners, and purchase flow.
 *
 * What it does:
 * - Render item metadata from stolenItems.json (image, description,
 *   seller, stock, price, etc.)
 * - Handle "Buy Now" interaction and modal visibility
 * - Provide navigation back to the gallery
 */

interface ItemDetailProps {
  item: StolenItem;
  onBack: () => void;
}

export default function ItemDetail({ item, onBack }: ItemDetailProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mb-10">
      <Banner stock={item.item_stock} />

      <div className="md:mx-[150px] mx-[30px] mt-12">
        <BackButton onBack={onBack} />
        <WarningBanner />

        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <ItemImage imageUrl={item.item_photo_url} name={item.item_name} />
            <ItemReview />
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <ItemNameCard
              name={item.item_name}
              description={item.item_description}
            />

            <div>
              <ItemInfoCard
                price={item.item_price}
                seller={item.seller_username}
                stock={item.item_stock}
                city={item.seller_city}
                country={item.seller_country}
              />
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="lg-red-button"
            >
              ★ BUY NOW ★
            </button>

            <WarningInfo />
          </div>
        </div>

        <ImportantInfo />

        {showModal && (
          <PurchaseModal
            item_name={item.item_name}
            item_price={item.item_price}
            item_stock={item.item_stock}
            seller_username={item.seller_username}
            seller_country={item.seller_country}
            seller_city={item.seller_city}
            onClose={() => setShowModal(false)}
            onReturnToGallery={onBack}
          />
        )}
      </div>
    </div>
  );
}
