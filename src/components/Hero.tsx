import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-desserts.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Freshly made Italian desserts including Bomboloni, Churros and San Sebastian Cheesecake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-32 text-center">
        <span className="inline-block px-4 py-2 bg-accent/20 text-primary rounded-full text-sm font-medium mb-6">
          Authentic Spanish & Italian Desserts
        </span>

        

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
          Your sweet escape into authentic Spanish & Italian treats – handcrafted fresh every single day in Hyderabad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-caramel flex items-center gap-2 min-w-[180px] justify-center"
          >
            <span>Order on Zomato</span>
          </a>
          <a
            href="https://swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-caramel flex items-center gap-2 min-w-[180px] justify-center"
          >
            <span>Order on Swiggy</span>
          </a>
          <a
            href="https://wa.me/917995419191"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-cream flex items-center gap-2 min-w-[180px] justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Order</span>
          </a>
        </div>

        {/* Open Hours */}
        <p className="text-sm text-muted-foreground">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
          Open Daily • 9:00 AM – 11:00 PM
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
