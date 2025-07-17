"use client"
import React, { useState, useEffect } from "react";
import { ClerkProvider } from "@clerk/nextjs";

const ClientLayout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rendu côté serveur et avant hydratation
  if (!mounted) {
    return (
      <div suppressHydrationWarning>
        {children}
      </div>
    );
  }

  // Rendu côté client après hydratation
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
};

export default ClientLayout;