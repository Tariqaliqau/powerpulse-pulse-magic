import { useParams, Link } from "react-router-dom";
import { BarChart3, Database, Layers, Brain, FileText, Shield, GitBranch, GraduationCap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const servicesData: Record<string, {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  benefits: string[];
}> = {
  "power-bi-development": {
    icon: BarChart3,
    title: "Power BI Development",
    description: "Custom Power BI dashboards and reports that transform your data into visual insights. Interactive visualizations tailored to your business needs.",
    details: [
      "Custom dashboard design and development",
      "Interactive reports with drill-through capabilities",
      "Real-time data visualization",
      "Mobile-optimized reports",
      "Custom visuals and themes",
      "Performance optimization",
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify trends and patterns instantly",
      "Share insights across your organization",
      "Reduce reporting time by up to 80%",
    ],
  },
  "microsoft-fabric": {
    icon: Layers,
    title: "Microsoft Fabric",
    description: "End-to-end analytics platform implementation. Unified data lake, data engineering, data science, and business intelligence in one platform.",
    details: [
      "Fabric workspace setup and configuration",
      "Lakehouse architecture design",
      "Data pipeline development",
      "Synapse integration",
      "Real-time analytics implementation",
      "Governance and security setup",
    ],
    benefits: [
      "Unified analytics experience",
      "Reduced infrastructure complexity",
      "Seamless Microsoft 365 integration",
      "Cost-effective scaling",
    ],
  },
  "data-integration": {
    icon: Database,
    title: "Data Integration",
    description: "Seamless integration of data from multiple sources. ETL pipelines, data warehousing, and real-time data connectivity solutions.",
    details: [
      "ETL/ELT pipeline development",
      "Data warehouse design",
      "API integrations",
      "Real-time data streaming",
      "Data quality management",
      "Source system connectivity",
    ],
    benefits: [
      "Single source of truth",
      "Automated data flows",
      "Reduced manual data handling",
      "Improved data accuracy",
    ],
  },
  "advanced-analytics": {
    icon: Brain,
    title: "Advanced Analytics",
    description: "Predictive analytics, machine learning models, and AI-powered insights to help you stay ahead of the competition.",
    details: [
      "Predictive modeling",
      "Machine learning integration",
      "Statistical analysis",
      "Forecasting solutions",
      "Anomaly detection",
      "Customer segmentation",
    ],
    benefits: [
      "Predict future trends",
      "Automate decision-making",
      "Identify hidden opportunities",
      "Reduce business risks",
    ],
  },
  "report-migration": {
    icon: FileText,
    title: "Report Migration",
    description: "Migrate your legacy reports to Power BI. We handle SSRS, Excel, and other reporting tools migration with zero data loss.",
    details: [
      "SSRS to Power BI migration",
      "Excel report conversion",
      "Crystal Reports migration",
      "Legacy system assessment",
      "Data validation and testing",
      "User training and adoption",
    ],
    benefits: [
      "Modern reporting experience",
      "Reduced maintenance costs",
      "Improved performance",
      "Enhanced collaboration",
    ],
  },
  "power-bi-administration": {
    icon: Shield,
    title: "Power BI Administration",
    description: "Workspace management, security setup, row-level security, and governance best practices for enterprise deployments.",
    details: [
      "Tenant configuration",
      "Workspace management",
      "Row-level security (RLS)",
      "Capacity planning",
      "Governance policies",
      "Usage monitoring and auditing",
    ],
    benefits: [
      "Secure data access",
      "Optimized performance",
      "Compliance adherence",
      "Efficient resource management",
    ],
  },
  "data-modeling": {
    icon: GitBranch,
    title: "Data Modeling",
    description: "Optimized data models for performance. Star schema design, DAX calculations, and semantic layer development.",
    details: [
      "Star schema design",
      "DAX calculations and measures",
      "Semantic layer development",
      "Performance tuning",
      "Incremental refresh setup",
      "Composite models",
    ],
    benefits: [
      "Fast query performance",
      "Consistent business logic",
      "Scalable architecture",
      "Easy maintenance",
    ],
  },
  "training-support": {
    icon: GraduationCap,
    title: "Training & Support",
    description: "Empower your team with Power BI and Fabric training. Ongoing support and maintenance to ensure your success.",
    details: [
      "Customized training programs",
      "Hands-on workshops",
      "Best practices documentation",
      "Ongoing technical support",
      "Office hours and Q&A sessions",
      "Certification preparation",
    ],
    benefits: [
      "Self-sufficient teams",
      "Faster adoption",
      "Reduced dependency on consultants",
      "Continuous improvement",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Link to="/#services" className="inline-flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {service.title}
              </h1>
            </div>

            <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
              {service.description}
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">What We Offer</h2>
                <ul className="space-y-4">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16 p-8 bg-primary/5 rounded-lg border border-primary/20">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how our {service.title.toLowerCase()} services can help transform your business.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
