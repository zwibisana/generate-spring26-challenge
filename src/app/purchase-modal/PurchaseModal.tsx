"use client";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { LocationSummary } from "./LocationSummary";
import { Quantity } from "./Quantity";
import { Total } from "./Total";
import { CheckoutHeader } from "./CheckoutHeader";
import { ConfirmationModal } from "./ConfirmationModal";
import { ItemSummary } from "./ItemSummary";
import { ModalOverlay } from "./ModalOverlay";
import { SellerSummary } from "./SellerSummary";
import Reminder from "./Reminder";

/*
 * Purchase Modal
 *
 * Displays a pre-confirmation checkout modal where users can
 * adjust quantity and see what their total comes out to.
 *
 * What it does:
 * - Render item metadata from stolenItems.json (image, description,
 *   seller, stock, price, etc.)
 * - Handle "Confirm Purchase" interaction and modal visibility
 */

interface PurchaseModalProps {
  item_name: string;
  item_price: number;
  item_stock: number;
  seller_username: string;
  seller_country: string;
  seller_city: string;

  /*
   * Callback to return user back to item detail
   */
  onClose: () => void;

  /*
   * Callback to return user back to item gallery
   */
  onReturnToGallery: () => void;
}

export default function PurchaseModal({
  item_name,
  item_price,
  item_stock,
  seller_username,
  seller_country,
  seller_city,
  onClose,
  onReturnToGallery,
}: PurchaseModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [order_number, setOrderNumber] = useState("");
  const [countdown, setCountdown] = useState(10);

  const total = item_price * quantity;

  useEffect(() => {
    if (!showConfirmation) return;

    setCountdown(10);
    const interval = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          onReturnToGallery();
          clearInterval(interval);
          return 0;
        }
        return c - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showConfirmation, onReturnToGallery]);

  if (showConfirmation) {
    return (
      <ModalOverlay onClose={onReturnToGallery} dimmed={false}>
        <ConfirmationModal
          order_number={order_number}
          item_name={item_name}
          quantity={quantity}
          total={total}
          countdown={countdown}
          onReturn={onReturnToGallery}
        />
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay onClose={onClose}>
      <div className="bg-[#18181a] p-7 w-[448px] outline outline-[#27272A] flex flex-col gap-y-4">
        <CheckoutHeader onClose={onClose} />
        <Banner />
        <ItemSummary name={item_name} />
        <SellerSummary username={seller_username} />
        <LocationSummary city={seller_city} country={seller_country} />
        <Quantity
          quantity={quantity}
          stock={item_stock}
          onIncrease={() => setQuantity((q) => q + 1)}
          onDecrease={() => setQuantity((q) => q - 1)}
        />
        <Total
          total={total}
          onConfirm={() => {
            setOrderNumber(
              Math.random().toString(36).substring(2, 15).toUpperCase()
            );
            setShowConfirmation(true);
          }}
        />
        <Reminder />
      </div>
    </ModalOverlay>
  );
}
