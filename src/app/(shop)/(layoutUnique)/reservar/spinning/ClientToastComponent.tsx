'use client';

import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientToastComponent() {
  useEffect(() => {
    const showToast = (text: string, type = "default") => {
      toast(text, {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: type as any,
      });
    };

    const handleMessage = (event: MessageEvent) => {
      // In production, check event.origin to ensure it's from your Laravel app
      if (event.data && event.data.type === 'showPersistentToast') {
        const { text, toastType } = event.data;
        showToast(text, toastType);
      }
    };

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'persistentToast') {
        const storedToast = event.newValue;
        if (storedToast) {
          const { text, type } = JSON.parse(storedToast);
          showToast(text, type);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("storage", handleStorageChange);

    // Check for stored toast on initial load
    const storedToast = localStorage.getItem("persistentToast");
    if (storedToast) {
      const { text, type } = JSON.parse(storedToast);
      showToast(text, type);
    }

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={false}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}