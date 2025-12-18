import { MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose your favorite dessert",
    description: "Browse our signature collection",
  },
  {
    number: "02",
    title: "Order via your preferred platform",
    description: "Zomato, Swiggy, Magicpin or WhatsApp",
  },
  {
    number: "03",
    title: "We prepare it fresh & deliver",
    description: "Made on order, delivered to your door",
  },
];

const HowToOrder = () => {
  return (
    <section id="order" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
            Simple & Easy
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Ordering Is Easy
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              <div className="inline-block text-5xl font-display font-bold text-accent mb-4">
                {step.number}
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent/30 -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/917995419191"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-elevated hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Order
          </a>
          <a
            href="https://zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 font-semibold transition-all duration-300"
          >
            Zomato
          </a>
          <a
            href="https://swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 font-semibold transition-all duration-300"
          >
            Swiggy
          </a>
          <a
            href="https://magicpin.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 font-semibold transition-all duration-300"
          >
            Magicpin
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
