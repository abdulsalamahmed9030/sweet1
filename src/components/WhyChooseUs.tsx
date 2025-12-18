import { Globe, Clock, Wallet, Heart } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Authentic European Recipes",
    description: "Traditional techniques from Spain & Italy",
  },
  {
    icon: Clock,
    title: "Made Fresh After You Order",
    description: "No pre-made stock, ever",
  },
  {
    icon: Wallet,
    title: "Cloud Kitchen = Better Pricing",
    description: "Premium quality, fair prices",
  },
  {
    icon: Heart,
    title: "Loved Across Hyderabad",
    description: "Growing community of dessert lovers",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Why Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
            Why Choose Dough & Beyond
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <reason.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-primary text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
