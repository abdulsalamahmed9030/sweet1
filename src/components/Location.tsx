import { MapPin, Clock } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
            Where We're Based
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl shadow-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-primary text-lg mb-2">
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    Kondapur / Gachibowli,<br />
                    Hyderabad, Telangana – 500049
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-primary text-lg mb-2">
                    Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Open Daily<br />
                    9:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
