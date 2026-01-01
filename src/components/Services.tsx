import { BarChart3, Database, Layers, Brain, FileText, Shield, GitBranch, GraduationCap } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Power BI Development",
    description: "Custom Power BI dashboards and reports that transform your data into visual insights. Interactive visualizations tailored to your business needs.",
  },
  {
    icon: Layers,
    title: "Microsoft Fabric",
    description: "End-to-end analytics platform implementation. Unified data lake, data engineering, data science, and business intelligence in one platform.",
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration of data from multiple sources. ETL pipelines, data warehousing, and real-time data connectivity solutions.",
  },
  {
    icon: Brain,
    title: "Advanced Analytics",
    description: "Predictive analytics, machine learning models, and AI-powered insights to help you stay ahead of the competition.",
  },
  {
    icon: FileText,
    title: "Report Migration",
    description: "Migrate your legacy reports to Power BI. We handle SSRS, Excel, and other reporting tools migration with zero data loss.",
  },
  {
    icon: Shield,
    title: "Power BI Administration",
    description: "Workspace management, security setup, row-level security, and governance best practices for enterprise deployments.",
  },
  {
    icon: GitBranch,
    title: "Data Modeling",
    description: "Optimized data models for performance. Star schema design, DAX calculations, and semantic layer development.",
  },
  {
    icon: GraduationCap,
    title: "Training & Support",
    description: "Empower your team with Power BI and Fabric training. Ongoing support and maintenance to ensure your success.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Services We Are Offering</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Data Analytics Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We Design Data Solutions That Help Grow Businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <a
                href="#contact"
                className="text-primary text-sm font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
