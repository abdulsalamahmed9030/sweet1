import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandPromise from "@/components/BrandPromise";
import About from "@/components/About";
import SignatureDesserts from "@/components/SignatureDesserts";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowToOrder from "@/components/HowToOrder";
import AvailableOn from "@/components/AvailableOn";
import CustomerLove from "@/components/CustomerLove";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dough & Beyond | Authentic Spanish & Italian Desserts in Hyderabad</title>
        <meta
          name="description"
          content="Freshly made Bomboloni, Churros, San Sebastian Cheesecake & more. Order authentic Italian & Spanish desserts online in Kondapur & Gachibowli, Hyderabad."
        />
        <meta
          name="keywords"
          content="desserts hyderabad, bomboloni, churros, san sebastian cheesecake, italian desserts, spanish desserts, cloud kitchen hyderabad, kondapur desserts, gachibowli sweets"
        />
        <link rel="canonical" href="https://doughandbeyond.net" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dough & Beyond | Authentic Desserts in Hyderabad" />
        <meta property="og:description" content="Freshly made Spanish & Italian desserts delivered to your door. Order Bomboloni, Churros, Cheesecake & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://doughandbeyond.net" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            "name": "Dough & Beyond",
            "description": "Authentic Spanish & Italian desserts made fresh daily in Hyderabad",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500049",
              "addressCountry": "IN"
            },
            "telephone": "+917995419191",
            "email": "contact@doughandbeyond.net",
            "openingHours": "Mo-Su 09:00-23:00",
            "servesCuisine": ["Italian", "Spanish", "Desserts"],
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <main className="overflow-hidden">
        <Navbar />
        <Hero />
        <BrandPromise />
        <About />
        <SignatureDesserts />
        <WhyChooseUs />
        <HowToOrder />
        <AvailableOn />
        <CustomerLove />
        <Location />
        <Contact />
        <SocialProof />
        <Footer />
        <StickyWhatsApp />
      </main>
    </>
  );
};

export default Index;
