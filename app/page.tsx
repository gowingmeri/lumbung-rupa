import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSuggestions from "@/components/ProductSuggestions";
import FAB from "@/components/FAB";
import IndonesiaMap from "@/components/IndonesiaMap";
import Carousel from "@/components/Crousel";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <IndonesiaMap />
      {/* <Carousel /> */}
      <ProductSuggestions />
      <FAB />
      <Footer />
    </div>
  );
}

export default HomePage;