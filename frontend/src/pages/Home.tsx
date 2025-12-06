import { Database, Laptop, Keyboard, Languages, BookOpen, Trophy, Mail, Phone, MapPin, Calendar, Globe, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const skills = [
    {
      icon: Database,
      title: "Data Entry",
      description: "Proficient in accurate and efficient data entry with attention to detail.",
    },
    {
      icon: Laptop,
      title: "Basic Computer Knowledge",
      description: "Strong foundation in computer fundamentals and office applications.",
    },
    {
      icon: Keyboard,
      title: "Typing Speed",
      description: "Currently improving typing speed and accuracy for professional work.",
    },
    {
      icon: Laptop,
      title: "Static Website Development",
      description: "Able to build modern, responsive, and clean static websites using HTML, CSS, JavaScript, and frontend frameworks.",
    }
  ];

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Hindi", level: "Native" },
  ];

  const interests = [
    {
      icon: BookOpen,
      title: "Reading Books",
      description: "Passionate about reading and expanding knowledge.",
    },
    {
      icon: Trophy,
      title: "Sports",
      description: "Active interest in various sports and physical activities.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-6 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hamza <span className="text-primary">Bagwan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Information Technology Student
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a href="mailto:hamzabagwan7@gmail.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span>hamzabagwan7@gmail.com</span>
            </a>
            <a href="tel:7498750801" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
              <span>7498750801</span>
            </a>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Pune, India</span>
            </span>
          </div>

          <div className="pt-8">
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Date of Birth</h3>
                  <p className="text-muted-foreground">04-08-2005</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Nationality</h3>
                  <p className="text-muted-foreground">Indian</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <User className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Gender</h3>
                  <p className="text-muted-foreground">Male</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors md:col-span-2">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Information Technology student currently pursuing my BBACA degree at Arihant College, Pune.
                With a strong foundation in computer fundamentals and data entry, I'm constantly expanding my technical skills
                and knowledge. I'm dedicated to learning and growing in the field of technology.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="bg-card border-border hover:border-primary transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">BBACA (Currently Pursuing)</h3>
                  <p className="text-primary font-medium">Arihant College, Pune</p>
                </div>
                <div className="text-muted-foreground">
                  <p className="font-medium">2023 - 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Commerce</h3>
                  <p className="text-primary font-medium">Poona College, Pune</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-border hover:border-primary transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Entry</h3>
                  <p className="text-primary font-medium mb-3">Solanum Services, Pune, India</p>
                  <p className="text-muted-foreground">
                    Gained hands-on experience in data entry operations, developing accuracy and efficiency in handling data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-7">
          <Card className="bg-card border-border hover:border-primary transition-all">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                  <p className="text-primary font-medium mb-3">VTechNex IT Services, Pune, India</p>
                  <p className="text-muted-foreground">
                    Currently working as a Frontend Developer, building responsive and user-friendly web interfaces.
                    Focusing on clean UI implementation and improved user experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </section>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Skills
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized skills and continuous learning in technology and professional development
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary transition-all hover:scale-105 duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 bg-primary/10 rounded-full">
                        <skill.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="text-primary">Languages</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {languages.map((language, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Languages className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="text-lg font-semibold">{language.name}</h3>
                          <p className="text-sm text-muted-foreground">{language.level}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interests Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Personal <span className="text-primary">Interests</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {interests.map((interest, index) => (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary transition-all hover:scale-105 duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <interest.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
                        <p className="text-muted-foreground">{interest.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
