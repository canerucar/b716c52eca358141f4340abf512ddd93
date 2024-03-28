"use client";
import "@/app/ui/globals.scss";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import store from "@/app/stores/store";
import { Provider } from 'react-redux';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    if (window.location.pathname === '/' 
      && window.location.hostname === 'localhost'
      && window.location.port === '3000') {
      router.push('/program/futbol');
    }
  }, []);
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
        </html>
    </Provider>
  );
}
