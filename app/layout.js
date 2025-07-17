import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import ClientLayout from "@/components/ClientLayout";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "QuickCart - GreatStack",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700`} suppressHydrationWarning>
        <Toaster />
        <AppContextProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppContextProvider>
      </body>
    </html>
  );
}