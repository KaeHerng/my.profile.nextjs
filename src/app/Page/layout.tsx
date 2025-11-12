import "../globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";

export default function PageLayout({
  children,
} : {
  children: React.ReactNode;
}) {
  return (
      <div className="flex flex-col min-h-screen bg-gray-50 bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/asset/BackgroundMain.jpg')" }}>
        {/* Navbar always on top */}
        <Navbar />

        {/* Main Content Section (Sidebar lives inside this) */}
        <main className="flex flex-1 p-4 gap-4 relative">
          <Sidebar />

          {/* Page content */}
          <div className="flex-1 bg-white/50 rounded-3xl shadow-sm p-2 transition-all duration-300 max-w-full">
            <ClientWrapper>{children}</ClientWrapper>
          </div>
        </main>

        <Footer />
      </div>
  );
}