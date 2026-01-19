import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "../Providers/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Care.xyz",
    template: "%s | Care.xyz",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <header className="max-w-10/12 md:max-w-11/12 mx-auto ">
            <Navbar></Navbar>
          </header>
          <main className="max-w-10/12 md:max-w-11/12  mx-auto">
            {children}
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
