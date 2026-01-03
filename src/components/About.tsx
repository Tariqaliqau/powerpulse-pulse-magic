import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <p className="text-primary font-medium mb-2">Power BI & Fabric Experts</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">Hello!</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg">
              Are you looking for an expert team that will help you unlock the full potential of your data? Look no further! We are a specialized data analytics firm focused on Power BI and Microsoft Fabric solutions that help businesses transform their data into competitive advantages.
            </p>
            <p className="text-muted-foreground text-lg">
              We are extremely passionate about what we do and have always put our clients first. From the initial consultation to deployment, our team's uniquely personal attention will keep you in the loop as your analytics solution comes to life.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Learn More
            </Button>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
                alt="Modern data analytics workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 space-y-6">
          <p className="text-muted-foreground text-lg">
            Our Power BI and Microsoft Fabric development team is qualified; not only to create stunning, interactive dashboards but also to understand your unique business goals that will help you generate more insights and make better decisions.
          </p>
          <p className="text-primary font-medium text-lg">
            Contact us today. Let's take your data analytics to the next level!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
