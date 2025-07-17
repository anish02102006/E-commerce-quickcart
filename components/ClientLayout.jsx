"use client";
import React, { useState, useEffect } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues
const AppContextProvider = dynamic(
  () => import("@/context/AppContext").then((mod) => ({ default: mod.AppContextProvider })),
  {
    ssr: false,
    loading: () => <div suppressHydrationWarning>Loading...</div>
  }
);

const ClientLayout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div suppressHydrationWarning>
        {children}
      </div>
    );
  }

  // Client-side rendering after hydration
  return (
    <ClerkProvider>
      <SafeAppContextProvider>
        {children}
      </SafeAppContextProvider>
    </ClerkProvider>
  );
};

// Safe wrapper component for AppContextProvider
const SafeAppContextProvider = ({ children }) => {
  const [contextReady, setContextReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Wait for Clerk to be ready
    const timer = setTimeout(() => {
      setContextReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (error) {
    console.error("Error loading AppContextProvider:", error);
    return <div suppressHydrationWarning>{children}</div>;
  }

  if (!contextReady) {
    return <div suppressHydrationWarning>{children}</div>;
  }

  // Use the dynamically imported component
  return (
    <AppContextProvider>
      {children}
    </AppContextProvider>
  );
};

export default ClientLayout;