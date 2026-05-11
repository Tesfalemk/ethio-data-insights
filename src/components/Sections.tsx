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
  founder: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/b621e649-8429-4f14-8f79-d56b1a7c0fe3/founder-portrait-98967b95-1778502429842.webp',
  logo: 'https://storage.googleapis.com/dala-prod-public-storage/attachments/f70f5978-9e0c-4b86-b536-713e6d34dff0/1778502918049_photo_2026-05-11_15-35-06.jpg'
};

const MotionCard = motion(Card);

export const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
    <div className="absolute inset-0 z-0">
      <img src={IMAGES.hero} alt="Data Visualization" className="w-full h-full object-cover opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-teal-600/5" />
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-teal-600/10 text-teal-600 hover:bg-teal-600/20 border-teal-600/20 px-4 py-1.5 text-sm font-semibold tracking-wide">
            Data, Analytics & Research
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Turning <span className="text-teal-600">Data</span> into Actionable Growth
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Empowering Ethiopian businesses and NGOs with strategic insights and modern data solutions built for the local market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 h-14 shadow-xl shadow-teal-600/20 transition-all hover:scale-105">
              Explore Our Services
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-teal-600 text-teal-600 hover:bg-teal-600/5 transition-all">
              Book a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export const About = () => (
  <section id="about" className="py-24 bg-teal-50/30">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Bridging the Data Gap</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Alta Analytics & Consultancy provides data-driven insights and strategic advisory to SMEs, NGOs, and startups entering the Ethiopian market. We specialize in affordable, tech-enabled solutions using modern tools and deep local expertise.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="bg-white p-3 rounded-xl shadow-sm mt-1 border border-teal-600/10">
                <Target className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Our Mission</h3>
                <p className="text-slate-600">To empower Ethiopian organizations with actionable data insights that drive evidence-based decision-making and sustainable growth.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="bg-white p-3 rounded-xl shadow-sm mt-1 border border-teal-600/10">
                <Compass className="h-6 w-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Our Vision</h3>
                <p className="text-slate-600">To become the leading catalyst for data-driven transformation in Ethiopia, bridging the gap between raw data and business success.</p>
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
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img src={IMAGES.research} alt="Market Research" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-teal-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="text-3xl font-bold mb-1">25M+</p>
            <p className="text-sm opacity-90 font-medium">Digital Consumers in Ethiopia</p>
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
      description: 'Localized surveys and competitor analysis to help you navigate the Ethiopian landscape.',
      icon: Search,
      image: IMAGES.research
    },
    {
      title: 'Business Analytics & Dashboards',
      description: 'Automated sales tracking and KPI monitoring to keep your business on target.',
      icon: LineChart,
      image: IMAGES.dashboards
    },
    {
      title: 'Sector-Specific Intelligence',
      description: 'Deep dives into Agriculture, Fintech, and Energy sectors with field-level data.',
      icon: FileText,
      image: IMAGES.hero
    },
    {
      title: 'Digital Transformation',
      description: 'Modernizing legacy workflows with data tools to enhance operational efficiency.',
      icon: Settings,
      image: IMAGES.dashboards
    },
    {
      title: 'NGO Impact Evaluation',
      description: 'Rigorous M&E services to measure the real-world impact of development projects.',
      icon: HeartHandshake,
      image: IMAGES.ngo
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Expertise</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Combining field-level insights with modern analytical frameworks to deliver results.
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
            className="group hover:shadow-2xl transition-all border-gray-100 overflow-hidden hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <CardHeader>
              <div className="bg-teal-600/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 text-base leading-relaxed">
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
    <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-600/20 skew-x-12 transform translate-x-20" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mb-16">
        <Badge className="mb-6 bg-teal-600 text-white border-none px-4 py-1">Market Potential</Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ethiopia's Digital Frontier</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          The market is evolving rapidly. Organizations that leverage data today will define the industry standards of tomorrow.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="border-l-4 border-teal-600 pl-6">
          <p className="text-5xl font-bold mb-2 text-teal-600">40%</p>
          <p className="text-gray-300 font-medium">SME GDP Contribution</p>
          <p className="text-gray-500 text-sm mt-1">Significant growth potential with data tools.</p>
        </div>
        <div className="border-l-4 border-teal-600 pl-6">
          <p className="text-5xl font-bold mb-2 text-teal-600">25M+</p>
          <p className="text-gray-300 font-medium">Connected Users</p>
          <p className="text-gray-500 text-sm mt-1">A massive digital footprint for consumer research.</p>
        </div>
        <div className="border-l-4 border-teal-600 pl-6">
          <p className="text-5xl font-bold mb-2 text-teal-600">$1M+</p>
          <p className="text-gray-300 font-medium">NGO Field Research</p>
          <p className="text-gray-500 text-sm mt-1">Demand for reliable local data partners.</p>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl">
        <h3 className="text-2xl font-bold mb-10 text-center">Why Choose Alta Analytics?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex items-start gap-4">
            <div className="bg-teal-600/20 p-2 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
            </div>
            <p><span className="font-bold block text-white mb-1">Hyper-Local:</span> Deep understanding of Ethiopian cultural and business nuances.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-teal-600/20 p-2 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
            </div>
            <p><span className="font-bold block text-white mb-1">Modern Stack:</span> Faster, automated reporting using Python, R, and modern BI.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-teal-600/20 p-2 rounded-lg">
              <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
            </div>
            <p><span className="font-bold block text-white mb-1">Cost-Effective:</span> Premium insights without the international agency overhead.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Pricing = () => {
  const plans = [
    {
      name: 'Market Survey',
      price: '$500',
      period: 'per project',
      description: 'Ideal for startups needing rapid market validation.',
      features: ['500+ Respondents', 'Demographic analysis', 'Competitor mapping', '2-week delivery'],
      cta: 'Request Quote'
    },
    {
      name: 'Data Dashboard',
      price: '$300',
      period: '+ $50/mo',
      description: 'Best for growing firms needing continuous tracking.',
      features: ['Custom BI setup', 'Monthly refreshes', 'Key KPI tracking', 'Automated alerts'],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Sector Intelligence',
      price: '$1,000',
      period: 'per report',
      description: 'Deep intelligence for institutional investors.',
      features: ['Primary field data', 'Policy impact analysis', 'Trend forecasting', 'Expert debrief'],
      cta: 'View Samples'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Straightforward Pricing</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Choose the level of engagement that fits your current business objectives.
        </p>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative flex flex-col transition-all duration-300 ${plan.popular ? 'border-teal-600 shadow-2xl scale-105 z-10' : 'border-gray-200 hover:border-teal-600/50'}`}>
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white border-none px-6 py-1 shadow-lg shadow-teal-600/20">Most Popular</Badge>
            )}
            <CardHeader className="text-center pt-10">
              <CardTitle className="text-xl mb-2 text-slate-900">{plan.name}</CardTitle>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-medium">{plan.period}</span>
              </div>
              <CardDescription className="pt-4 text-slate-600">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow px-8">
              <ul className="space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pb-10 px-8">
              <Button className={`w-full h-12 text-lg font-bold transition-all ${plan.popular ? 'bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-600/20' : 'bg-slate-900 hover:bg-slate-900/90'}`}>
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
  <section className="py-24 bg-teal-50/20">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:row items-stretch">
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-2">
            <img src={IMAGES.founder} alt="Tesfalem Desta" className="w-full h-full object-cover min-h-[400px]" />
          </div>
          <div className="md:col-span-3 p-10 md:p-16 flex flex-col justify-center">
            <Badge className="mb-6 bg-teal-600/10 text-teal-600 border-none w-fit font-bold">Founder & Lead Consultant</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Tesfalem Desta</h2>
            <p className="text-2xl text-slate-900 font-medium italic mb-8 leading-relaxed">
              "We don't just deliver data; we deliver the clarity needed to lead with confidence."
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              With deep expertise in consumer behavior and data systems, Tesfalem founded Alta Analytics to empower Ethiopian businesses with the same analytical rigor used by global giants.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all">
                <Globe className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-all">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! Our consultant will contact you shortly.');
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Ignite Your Growth?</h2>
            <p className="text-xl text-slate-600 mb-12">
              Connect with us today for a free initial consultation on your data and research needs.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="bg-teal-600 text-white p-4 rounded-2xl shadow-lg shadow-teal-600/20">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Email Us</p>
                  <p className="text-slate-600 text-lg">info@altaanalytics.et</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="bg-teal-600 text-white p-4 rounded-2xl shadow-lg shadow-teal-600/20">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Call Us</p>
                  <p className="text-slate-600 text-lg">+251 911 234 567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="bg-teal-600 text-white p-4 rounded-2xl shadow-lg shadow-teal-600/20">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Location</p>
                  <p className="text-slate-600 text-lg">Bole Road, Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-[2rem] shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Full Name</label>
                  <Input placeholder="Your Name" className="h-14 bg-gray-50 border-gray-100 focus:border-teal-600 focus:ring-teal-600" required />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Email</label>
                  <Input type="email" placeholder="email@company.com" className="h-14 bg-gray-50 border-gray-100 focus:border-teal-600 focus:ring-teal-600" required />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Subject</label>
                <Input placeholder="What are you looking for?" className="h-14 bg-gray-50 border-gray-100 focus:border-teal-600 focus:ring-teal-600" required />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-wider">Message</label>
                <Textarea placeholder="Tell us about your objectives..." className="min-h-[160px] bg-gray-50 border-gray-100 focus:border-teal-600 focus:ring-teal-600" required />
              </div>
              
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 h-14 text-xl font-bold shadow-xl shadow-teal-600/20 transition-all hover:scale-[1.02]">
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
  <footer className="bg-slate-900 text-white pt-24 pb-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg overflow-hidden bg-white/10 p-1 flex items-center justify-center">
              <img src={IMAGES.logo} alt="Alta Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">Alta Analytics</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg">
            Empowering Ethiopia\u2019s growth through data-driven clarity and strategic consultancy.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-teal-600 hover:border-teal-600 transition-all">
              <Globe className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-teal-600 hover:border-teal-600 transition-all">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8">Our Services</h4>
          <ul className="space-y-5 text-gray-400 text-lg">
            <li><a href="#" className="hover:text-teal-600 transition-colors">Market Research</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Business Analytics</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Sector Reports</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">NGO Evaluation</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8">Company</h4>
          <ul className="space-y-5 text-gray-400 text-lg">
            <li><a href="#" className="hover:text-teal-600 transition-colors">Our Vision</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Impact</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8">Insights</h4>
          <p className="text-gray-400 mb-6 text-lg">Subscribe to our monthly market analysis.</p>
          <div className="flex flex-col gap-3">
            <Input placeholder="Your email" className="bg-white/5 border-white/10 h-12 focus:border-teal-600 focus:ring-teal-600" />
            <Button className="bg-teal-600 hover:bg-teal-700 h-12 font-bold">Subscribe</Button>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 text-center text-gray-500 font-medium">
        <p>\u00a9 2025 Alta Analytics & Consultancy. Powered by data.</p>
      </div>
    </div>
  </footer>
);