import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl md:text-2xl font-display font-bold text-primary"
          >
            Dough & Beyond
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("order")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Order
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <a
              href="https://wa.me/917995419191"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-caramel text-sm px-5 py-2"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-card py-6 px-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-primary font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-left py-2 text-primary font-medium"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("order")}
                className="text-left py-2 text-primary font-medium"
              >
                Order
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-primary font-medium"
              >
                Contact
              </button>
              <a
                href="https://wa.me/917995419191"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-caramel text-center mt-2"
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
