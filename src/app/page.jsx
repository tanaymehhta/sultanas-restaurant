import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import AboutSection from "../components/AboutSection";
import OrderLocationSection from "../components/OrderLocationSection";
import Footer from "../components/Footer";
import FloatingOrderButton from "../components/FloatingOrderButton";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* Dynamic Hero Section with Parallax */}
      <HeroSection />

      {/* Menu Categories Grid */}
      <MenuSection />

      {/* About/Vibe Split Screen */}
      <AboutSection />

      {/* Order & Location */}
      <OrderLocationSection />

      {/* Footer */}
      <Footer />

      {/* Floating Order Button */}
      <FloatingOrderButton />
    </div>
  );
}
