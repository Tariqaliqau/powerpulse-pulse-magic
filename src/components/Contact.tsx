import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Like What You've Seen? Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contact Us
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-foreground mb-2">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              required
              className="bg-card border-border"
            />
          </div>

          <div>
            <label className="block text-foreground mb-2">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              required
              className="bg-card border-border"
            />
          </div>

          <div>
            <label className="block text-foreground mb-2">Phone Number</label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
              className="bg-card border-border"
            />
          </div>

          <div>
            <label className="block text-foreground mb-2">Service Interested In</label>
            <Select
              value={formData.service}
              onValueChange={(value) => setFormData({ ...formData, service: value })}
            >
              <SelectTrigger className="bg-card border-border">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="power-bi">Power BI Development</SelectItem>
                <SelectItem value="fabric">Microsoft Fabric</SelectItem>
                <SelectItem value="integration">Data Integration</SelectItem>
                <SelectItem value="analytics">Advanced Analytics</SelectItem>
                <SelectItem value="migration">Report Migration</SelectItem>
                <SelectItem value="training">Training & Support</SelectItem>
                <SelectItem value="all">All of the Above</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-foreground mb-2">Message</label>
            <Textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="bg-card border-border"
            />
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
            Send Request
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
