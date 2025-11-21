import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSuggestions from "@/components/ProductSuggestions";
import FAB from "@/components/FAB";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSuggestions />
      <FAB />
    </div>
  );
}

export default HomePage;