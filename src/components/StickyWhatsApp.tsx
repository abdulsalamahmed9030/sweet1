import { MessageCircle } from "lucide-react";

const StickyWhatsApp = () => {
  return (
    <a
      href="https://wa.me/917995419191"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-primary-foreground pl-4 pr-5 py-3 rounded-full font-semibold shadow-elevated hover:shadow-card transition-all duration-300 hover:scale-105 md:bottom-8 md:right-8"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Order Now</span>
    </a>
  );
};

export default StickyWhatsApp;
