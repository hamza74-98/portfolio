import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hamzabagwan7@gmail.com",
      link: "mailto:hamzabagwan7@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "7498750801",
      link: "tel:7498750801",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, India",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary transition-all hover:scale-105 duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
