interface ModalOverlayProps {
  children: React.ReactNode;
  /*
   * Callback to exit out of modal
   */
  onClose: () => void;
  dimmed?: boolean;
}

export function ModalOverlay({
  children,
  onClose,
  dimmed = true,
}: ModalOverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center ${
        dimmed ? "bg-black/50 backdrop-blur-sm" : "bg-black"
      }`}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
}
