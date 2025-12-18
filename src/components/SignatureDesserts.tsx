import { useState } from "react";

const desserts = [
  {
    name: "Bomboloni",
    description: "Soft Italian doughnuts generously filled with rich creams.",
    emoji: "🍩",
    color: "from-amber-100 to-orange-100",
  },
  {
    name: "Churros",
    description: "Perfectly crisp on the outside, soft inside, dusted with sugar.",
    emoji: "🥖",
    color: "from-yellow-100 to-amber-100",
  },
  {
    name: "San Sebastian Cheesecake",
    description: "Burnt on top, creamy at heart – our crowd favorite.",
    emoji: "🧀",
    color: "from-orange-100 to-yellow-100",
  },
  {
    name: "Panna Cotta",
    description: "Smooth, silky Italian classic with delicate sweetness.",
    emoji: "🍮",
    color: "from-rose-50 to-pink-100",
  },
  {
    name: "Cannoli",
    description: "Crunchy shells filled with luscious cream, straight from Italy.",
    emoji: "🥐",
    color: "from-amber-50 to-orange-100",
  },
];

const SignatureDesserts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="menu" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Made with Love
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
            Our Signature Desserts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {desserts.map((dessert, index) => (
            <div
              key={dessert.name}
              className="card-dessert group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-40 bg-gradient-to-br ${dessert.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                <span 
                  className={`text-6xl transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-125 animate-float" : ""
                  }`}
                >
                  {dessert.emoji}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-primary mb-2">
                  {dessert.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {dessert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDesserts;
