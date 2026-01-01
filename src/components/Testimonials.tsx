import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "insightX transformed our reporting process completely. Their Power BI dashboards reduced our monthly reporting time by 80%. The team is incredibly professional and their expertise in Microsoft Fabric helped us consolidate all our data sources seamlessly.",
    name: "Sarah Mitchell",
    role: "CFO, TechCorp Industries",
  },
  {
    quote: "Working with insightX has been a game-changer. They delivered an enterprise-grade analytics solution that our entire organization now relies on. Their attention to detail and understanding of our business needs exceeded our expectations.",
    name: "Michael Chen",
    role: "Data Director, Global Retail Co",
  },
  {
    quote: "We were recommended to insightX by a partner company. Since retaining them, they have managed our entire BI infrastructure. Their hands-on approach has made a real difference. If you want to take your data analytics to the next level, these are the experts to call.",
    name: "Jennifer Adams",
    role: "VP Operations, HealthFirst",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -right-2" />
              <p className="text-muted-foreground mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
