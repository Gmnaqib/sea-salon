import { Poppins } from "next/font/google";
import "./globals.css";
import '@smastrom/react-rating/style.css'
import Header from "./_components/Header";
import MainHeader from "./_components/MainHeader";

const poppins = Poppins({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});

export const metadata = {
  title: "SEA Salon",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          {children}
          
      </body>
    </html>
  );
}
