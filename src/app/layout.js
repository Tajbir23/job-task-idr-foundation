import Navbar from "./components/Navbar/Navbar";
import SmTopbar from "./components/Topbar/SmTopbar";
import Topbar from "./components/Topbar/Topbar";
import './globals.css'



export const metadata = {
  title: "Duah & Ruqyah",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col gap-5 p-3 md:p-5 lg:p-10 bg-[#F7F8FA] overflow-hidden">
        <Navbar className="lg:h-screen " />
        <SmTopbar className="md:hidden" />
        <Topbar className="hidden md:flex lg:ml-32" />
        <div className="md:mt-12 lg:m-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
