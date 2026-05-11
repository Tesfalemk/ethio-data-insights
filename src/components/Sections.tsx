import React from 'react';
import { 
  LineChart, 
  Search, 
  FileText, 
  Settings, 
  HeartHandshake, 
  Target, 
  Compass, 
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Globe,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const IMAGES = {
  hero: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/b621e649-8429-4f14-8f79-d56b1a7c0fe3/hero-data-viz-cde8c112-1778502429904.webp',
  research: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/b621e649-8429-4f14-8f79-d56b1a7c0fe3/market-research-0674b9dc-1778502429945.webp',
  dashboards: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/b621e649-8429-4f14-8f79-d56b1a7c0fe3/business-dashboards-2b7a1cf2-1778502429068.webp',
  ngo: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/b621e649-8429-4f14-8f79-d56b1a7c0fe3/ngo-impact-617b704e-1778502429040.webp',
  founder: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/b621e649-8429-4f14-8f79-d56b1a7c0fe3/founder-portrait-98967b95-1778502429842.webp'
};

const MotionCard = motion(Card);

export const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src={IMAGES.hero} alt="Data Visualization" className="w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-4 py-1">
            Data, Analytics & Research
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Turning <span className="text-blue-600">Data</span> into Growth
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Empowering Ethiopian businesses and NGOs with actionable insights, market research, and strategic data solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 h-14">
              Explore Our Services
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14">
              Book a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export const About = () => (
  <section id="about" className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Bridging the Data Gap</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Alta Analytics & Consultancy provides data-driven insights, market research, and business advisory services to SMEs, NGOs, startups, and international firms entering Ethiopia. We specialize in affordable, tech-enabled solutions using open-source tools and local expertise.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg mt-1">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Our Mission</h3>
                <p className="text-slate-600">To empower Ethiopian businesses and organizations with actionable data insights that drive growth, efficiency, and evidence-based decision-making.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg mt-1">
                <Compass className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Our Vision</h3>
                <p className="text-slate-600">To become Ethiopia’s leading high-impact data consultancy firm, bridging the gap between raw data and strategic business success.</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <img src={IMAGES.research} alt="Market Research" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border hidden md:block">
            <p className="text-3xl font-bold text-blue-600 mb-1">25M+</p>
            <p className="text-sm text-slate-500">Internet Users in Ethiopia</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export const Services = () => {
  const services = [
    {
      title: 'Market Research & Data Collection',
      description: 'Surveys, focus groups, and competitor analysis tailored to the Ethiopian landscape.',
      icon: Search,
      image: IMAGES.research
    },
    {
      title: 'Business Analytics & Dashboards',
      description: 'Real-time sales tracking and performance insights to optimize your operations.',
      icon: LineChart,
      image: IMAGES.dashboards
    },
    {
      title: 'Sector-Specific Research',
      description: 'Deep dives into Agriculture, Fintech, and Renewable Energy sectors in Ethiopia.',
      icon: FileText,
      image: IMAGES.hero
    },
    {
      title: 'Digital Transformation',
      description: 'Helping SMEs adopt modern data tools to stay competitive in the digital economy.',
      icon: Settings,
      image: IMAGES.dashboards
    },
    {
      title: 'Impact Evaluation for NGOs',
      description: 'M&E services for development projects with high-quality field data collection.',
      icon: HeartHandshake,
      image: IMAGES.ngo
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We combine local market expertise with tech-driven analytical solutions to help you grow.
        </p>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <MotionCard 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group hover:shadow-xl transition-all border-slate-100 overflow-hidden"
          >
            <div className="h-48 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <CardHeader>
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 text-base">
                {service.description}
              </CardDescription>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </section>
  );
};

export const MarketAnalysis = () => (
  <section id="market" className="py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 skew-x-12 transform translate-x-20" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl font-bold mb-6">Ethiopia's Growing Digital Economy</h2>
        <p className="text-slate-400 text-lg">
          The landscape is shifting, and those with data hold the competitive edge. We provide the tools to navigate this transition.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="border-l-4 border-blue-600 pl-6">
          <p className="text-4xl font-bold mb-2">40%</p>
          <p className="text-slate-400">GDP contribution from SMEs that lack data tools.</p>
        </div>
        <div className="border-l-4 border-blue-600 pl-6">
          <p className="text-4xl font-bold mb-2">25M+</p>
          <p className="text-slate-400">Internet users creating a goldmine of digital consumer data.</p>
        </div>
        <div className="border-l-4 border-blue-600 pl-6">
          <p className="text-4xl font-bold mb-2">$1M+</p>
          <p className="text-slate-400">NGO research spending with a need for local data firms.</p>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Competitive Edge</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <p><span className="font-bold block text-white">Hyper-Local Insights:</span> We understand the nuances of the Ethiopian market better than global firms.</p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <p><span className="font-bold block text-white">Tech-Driven:</span> Faster reporting using modern Python, R, and BI tools.</p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-6 w-6 text-blue-400 flex-shrink-0" />
            <p><span className="font-bold block text-white">Affordable:</span> Scalable solutions without the high overhead of international agencies.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Pricing = () => {
  const plans = [
    {
      name: 'Market Research Survey',
      price: '$500',
      period: 'per project',
      description: 'Perfect for startups and SMEs needing initial market validation.',
      features: ['Up to 500 respondents', 'Basic demographic analysis', 'Competitor overview', '2-week turnaround'],
      cta: 'Request Quote'
    },
    {
      name: 'Analytics Dashboard',
      price: '$300',
      period: '+ $50/mo',
      description: 'For growing businesses needing real-time performance tracking.',
      features: ['Power BI/Tableau setup', 'Monthly data refresh', 'Custom KPIs', 'Email alerts'],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Sector Research Report',
      price: '$1,000',
      period: 'per report',
      description: 'In-depth intelligence for investors and development partners.',
      features: ['Primary field data', 'Policy impact analysis', 'Future trend forecasting', 'Expert consultation'],
      cta: 'View Samples'
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Choose the engagement model that fits your business scale and needs.
        </p>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative flex flex-col ${plan.popular ? 'border-blue-600 shadow-xl scale-105' : 'border-slate-200'}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 px-4">Most Popular</Badge>
            )}
            <CardHeader className="text-center pt-10">
              <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-500">{plan.period}</span>
              </div>
              <CardDescription className="pt-4">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pb-10">
              <Button className={`w-full h-12 text-lg ${plan.popular ? 'bg-blue-600' : 'bg-slate-900'}`}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export const Founder = () => (
  <section className="py-24 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={IMAGES.founder} alt="Tesfalem Desta" className="w-full h-full object-cover min-h-[400px]" />
        </div>
        <div className="md:w-2/3 p-12 flex flex-col justify-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 w-fit">Founder & Lead Consultant</Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Tesfalem Desta</h2>
          <p className="text-xl text-slate-600 italic mb-8 leading-relaxed">
            "We aren't just selling charts; we're selling the clarity you need to lead your industry in Ethiopia."
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            With years of experience in data analysis and client management, Tesfalem founded Alta Analytics to bridge the massive gap between raw data and strategic business success in Ethiopia.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will get back to you within 24 hours.');
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to grow?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Fill out the form and our lead consultant will reach out to discuss your specific data needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email Us</p>
                  <p className="text-slate-600">info@altaanalytics.et</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Call Us</p>
                  <p className="text-slate-600">+251 900 000 000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Location</p>
                  <p className="text-slate-600">Addis Ababa, Ethiopia (Remote-first)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">Full Name</label>
                  <Input placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">Email Address</label>
                  <Input type="email" placeholder="email@company.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">Subject</label>
                <Input placeholder="How can we help?" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">Message</label>
                <Textarea placeholder="Tell us about your project..." className="min-h-[150px]" required />
              </div>
              
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold tracking-tight">Alta Analytics</span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Leading high-impact data consultancy firm in Ethiopia, bridging the gap between raw data and strategic business success.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
              <Globe className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Market Research</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Business Dashboards</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Sector Reports</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">NGO Impact Evaluation</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Our Team</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-slate-400 mb-4">Get the latest market insights from Ethiopia.</p>
          <div className="flex gap-2">
            <Input placeholder="Your email" className="bg-white/5 border-white/10" />
            <Button className="bg-blue-600 hover:bg-blue-700">Join</Button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>© 2025 Alta Analytics & Consultancy. All rights reserved.</p>
      </div>
    </div>
  </footer>
);