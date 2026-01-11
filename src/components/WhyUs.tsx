import { MessageSquare, Clock, Award, BadgeCheck, Users, HeadphonesIcon } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const features = [
  { icon: MessageSquare, label: "Clear communication skills" },
  { icon: Clock, label: "On time delivery" },
  { icon: Award, label: "Quality work" },
  { icon: BadgeCheck, label: "Microsoft Certified Experts" },
  { icon: Users, label: "Team collaboration" },
  { icon: HeadphonesIcon, label: "24/7 customer support" },
];

const AnimatedStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp({ end, suffix, duration: 2000 });
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Makes Us Different?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We are a dedicated team that loves taking on data challenges! With collaboration as our core, we are ready to work with you to create winning analytics solutions. We excel at listening and then acting on your needs, to deliver successful Power BI dashboards, Microsoft Fabric implementations, and comprehensive data strategies.
          </p>
        </div>

        <p className="text-foreground font-medium text-center mb-8">
          Some of the things our clients love about us:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
            >
              <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
          <AnimatedStat end={500} suffix="+" label="Projects Completed" />
          <AnimatedStat end={99} suffix="%" label="On Time Delivery" />
          <AnimatedStat end={100} suffix="%" label="Client Satisfaction" />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
