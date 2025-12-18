const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-display font-bold mb-2">
            Dough & Beyond
          </h3>
          <p className="text-primary-foreground/70">
            Authentic Desserts, Made Fresh Daily
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("order")}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Order
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Dough & Beyond. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
