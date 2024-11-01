import "./globals.css";
import Navbar from "@/Components/Home/Navbar";
import Footer from "@/Components/Home/Footer";

// const geistSans = localFont({
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ ""}
      >
        {/* <Navbar/> */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
