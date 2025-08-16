"use client";

import { useMemo, useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { track } from "@/lib/fbpixel"; // ⬅️ único import nuevo

export default function WhatsAppFloat({
  phone,
  message = "",
  label = "Chatear por WhatsApp",
  className = "",
}) {
  const href = useMemo(() => {
    const clean = String(phone || "").replace(/[^\d]/g, "");
    const q = message ? `?text=${encodeURIComponent(message)}` : "";
    return clean ? `https://wa.me/${clean}${q}` : "https://wa.me/";
  }, [phone, message]);

  const handleTrack = useCallback(() => {
    try {
      const clean = String(phone || "").replace(/[^\d]/g, "");
      track("Contact", {
        method: "whatsapp",
        placement: "float",
        page_path:
          typeof window !== "undefined" ? window.location.pathname : "/",
        phone_last4: clean ? clean.slice(-4) : "",
        has_message: Boolean(message && message.length),
      });
    } catch {}
  }, [phone, message]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      onClick={handleTrack}
      onAuxClick={handleTrack} // middle-click
      className={[
        "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50",
        "h-14 w-14 md:h-16 md:w-16 rounded-full",
        "bg-white text-black border border-neutral-300 shadow-lg",
        "hover:bg-black hover:text-white hover:shadow-xl",
        "flex items-center justify-center leading-none",
        "transition-transform duration-150 ease-out",
        "hover:-translate-y-0.5 active:translate-y-0",
        "print:hidden",
        className,
      ].join(" ")}
    >
      <FaWhatsapp size={26} aria-hidden="true" className="shrink-0" />
    </a>
  );
}
