function BuildingIcon() {
  return (
    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 21h18M6 21V3h12v18M9 9h6M9 13h6M9 17h6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 010 20" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="w-64 h-64" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ShoppingCartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M21 21H4V4" />
      <path d="M7 15l3-3 3 3 5-5" />
    </svg>
  );
}

function App() {
  const [activeTab, setActiveTab] = React.useState('home');
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  // Slides for the hero slider
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600",
      title: "Innovative Software Solutions",
      subtitle: "Transform your business with custom development"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
      title: "E-Commerce Excellence",
      subtitle: "Launch your online store with our expertise"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600",
      title: "Expert Development Team",
      subtitle: "Bringing your ideas to life"
    }
  ];

  // Auto-slide effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Services with pricing
  const services = [
    {
      icon: e(GlobeIcon),
      title: "Webpage/Homepage Design",
      price: "50,000 Yen ~",
      description: "Professional, responsive website design tailored to your brand",
      features: ["Responsive Design", "SEO Optimized", "5 Pages Included", "Contact Form"]
    },
    {
      icon: e(DatabaseIcon),
      title: "Business Management System",
      price: "200,000 Yen ~",
      description: "Comprehensive system to streamline your business operations",
      features: ["Inventory Management", "Employee Tracking", "Report Generation", "Analytics Dashboard"]
    },
    {
      icon: e(ChartIcon),
      title: "Educational Management System",
      price: "200,000 Yen ~",
      description: "Complete solution for schools and educational institutions",
      features: ["Student Records", "Attendance System", "Grade Management", "Parent Portal"]
    },
    {
      icon: e(ShoppingCartIcon),
      title: "E-Commerce Site Development",
      price: "500,000 Yen ~",
      description: "Full-featured online store with payment integration",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"]
    }
  ];

  // Portfolio projects
  const projects = [
    {
      id: 1,
      title: "RS Transport Solution",
      category: "Transportation Management System",
      description: "Real-time school transportation tracking system with live notifications for parents.",
      image: "https://via.placeholder.com/600x400/1e293b/ffffff?text=RS+Transport+Solution",
      technologies: ["React", "Real-time GPS", "Push Notifications"],
      link: "https://shayban-nasif.github.io/maktab-transport-system/",
      status: "ongoing",
      type: "system",
      client: "Iqra International School Tokyo"
    },
    {
      id: 2,
      title: "Maktab Management System",
      category: "Educational Institution Management",
      description: "Comprehensive school management platform handling student records, attendance, and grades.",
      image: "https://via.placeholder.com/600x400/0f172a/ffffff?text=Maktab+Management+System",
      technologies: ["Full-stack", "Database Management", "Analytics"],
      link: "http://gakuin.makkimasjid.jp/",
      status: "live",
      type: "system"
    },
    {
      id: 3,
      title: "Dr. Nabina Rahman - Professional Blog",
      category: "Content Management System",
      description: "Elegant professional blog platform with custom CMS and responsive design.",
      image: "https://via.placeholder.com/600x400/334155/ffffff?text=Medical+Professional+Blog",
      technologies: ["React", "CMS Integration", "SEO Optimized"],
      link: "https://shayban-nasif.github.io/DrNabinaRahmanBlog/",
      status: "review",
      type: "consumer"
    }
  ];

  const [filter, setFilter] = React.useState('all');
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.type === filter);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'live': return e("span", { className: "px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1" }, e(CheckIcon, null), " LIVE");
      case 'ongoing': return e("span", { className: "px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center gap-1" }, e(ClockIcon, null), " ONGOING");
      case 'review': return e("span", { className: "px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full" }, "REVIEW");
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* Header with Navigation */}
      <header className="bg-slate-900 text-white py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <BuildingIcon />
              <div>
                <h1 className="text-2xl font-bold tracking-wider">ASDIQA CO. LTD.</h1>
                <p className="text-xs text-slate-400 tracking-widest uppercase">
                  アスディカー株式会社
                </p>
              </div>
            </div>
            
            {/* Navigation Tabs */}
            <nav className="flex gap-2">
              <button onClick={() => setActiveTab('home')} className={`px-4 py-2 rounded-lg transition ${activeTab === 'home' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>Home</button>
              <button onClick={() => setActiveTab('services')} className={`px-4 py-2 rounded-lg transition ${activeTab === 'services' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>Services</button>
              <button onClick={() => setActiveTab('portfolio')} className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${activeTab === 'portfolio' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}><CodeIcon />Portfolio</button>
              <button onClick={() => setActiveTab('company')} className={`px-4 py-2 rounded-lg transition ${activeTab === 'company' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>Company</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Home Tab - Modern Redesign */}
      {activeTab === 'home' && (
        <>
          {/* Hero Slider */}
          <div className="relative h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50 flex items-center">
                  <div className="max-w-7xl mx-auto px-6 text-white">
                    <div className="max-w-2xl animate-fade-in-up">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                      <p className="text-xl text-slate-300 mb-8">{slide.subtitle}</p>
                      <div className="flex gap-4">
                        <button onClick={() => setActiveTab('services')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition transform hover:scale-105">
                          Our Services
                        </button>
                        <button onClick={() => setActiveTab('portfolio')} className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-bold transition">
                          View Portfolio
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>

          {/* Services Preview with Pricing */}
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Development Services</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Professional software solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">
                    <div className="w-12 h-12 mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                    <div className="text-2xl font-bold text-yellow-300">{service.price}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => setActiveTab('services')} className="mt-6 text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition">
                      Learn More <ArrowRightIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-slate-300">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-slate-300">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                  <div className="text-slate-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-slate-300">Support</div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Some of our recent work
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.slice(0, 3).map(project => (
                <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                  <div className="relative h-48 bg-slate-200 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    <div className="absolute top-4 right-4">{getStatusBadge(project.status)}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition">
                      View Project <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button onClick={() => setActiveTab('portfolio')} className="px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition inline-flex items-center gap-2">
                View All Projects <ArrowRightIcon />
              </button>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="bg-blue-600 py-16">
            <div className="max-w-4xl mx-auto px-6 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-blue-100 mb-8">Get a free consultation and quote within 24 hours</p>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-slate-100 transition transform hover:scale-105 inline-flex items-center gap-2">
                Contact Us Today <ArrowRightIcon />
              </button>
            </div>
          </section>
        </>
      )}

      {/* Services Tab - Detailed Services Page */}
      {activeTab === 'services' && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive development solutions for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
                  <div className="w-16 h-16 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-yellow-300">{service.price}</div>
                </div>
                <div className="p-8">
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-600">
                      <span className="font-bold">Note:</span> Final pricing depends on specific requirements and project scope.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Portfolio Tab */}
      {activeTab === 'portfolio' && (
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Showcasing our finest work in web development, enterprise systems, and digital solutions
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button onClick={() => setFilter('all')} className={`px-6 py-2 rounded-full font-medium transition ${filter === 'all' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border'}`}>All Projects</button>
            <button onClick={() => setFilter('system')} className={`px-6 py-2 rounded-full font-medium transition ${filter === 'system' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border'}`}>Enterprise Systems</button>
            <button onClick={() => setFilter('consumer')} className={`px-6 py-2 rounded-full font-medium transition ${filter === 'consumer' ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border'}`}>Consumer Solutions</button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="relative h-48 bg-slate-200 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute top-4 right-4">{getStatusBadge(project.status)}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.type === 'system' && e(DatabaseIcon, null)}
                    {project.type === 'consumer' && e(GlobeIcon, null)}
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  {project.client && <p className="text-sm text-slate-500 mb-2">Client: {project.client}</p>}
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition">
                    View Project <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Company Tab */}
      {activeTab === 'company' && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-center">About Us / 会社概要</h3>

            <div className="overflow-hidden border rounded-lg">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <tbody>
                  <tr className="border-b"><th className="w-1/3 bg-slate-100 px-6 py-4 font-medium">会社名</th><td className="px-6 py-4">アスディカ―株式会社</td></tr>
                  <tr className="border-b"><th className="bg-slate-100 px-6 py-4 font-medium">代表者</th><td className="px-6 py-4">フセイン・モハメドザキル</td></tr>
                  <tr className="border-b"><th className="bg-slate-100 px-6 py-4 font-medium">所在地</th><td className="px-6 py-4">東京都葛飾区お花茶屋二丁目2-20-107号</td></tr>
                  <tr className="border-b"><th className="bg-slate-100 px-6 py-4 font-medium">設立日</th><td className="px-6 py-4">令和7年9月29日</td></tr>
                  <tr className="border-b"><th className="bg-slate-100 px-6 py-4 font-medium">会社法人等番号</th><td className="px-6 py-4">0118-01-046844</td></tr>
                  <tr className="border-b align-top"><th className="bg-slate-100 px-6 py-4 font-medium">事業内容</th><td className="px-6 py-4 space-y-1"><div>・ITビジネスコンサルティング</div><div>・システム開発支援</div><div>・パソコン・電子機器の仕入れ・販売</div><div>・スパイス・食品等の小規模物販</div></td></tr>
                  <tr className="border-b"><th className="bg-slate-100 px-6 py-4 font-medium">ウェブサイト</th><td className="px-6 py-4"><a href="https://www.asdiqa.jp" target="_blank" className="text-blue-600 underline">www.asdiqa.jp</a></td></tr>
                  <tr><th className="bg-slate-100 px-6 py-4 font-medium">担当者</th><td className="px-6 py-4">シャイバン・ナシフ（Business Development Manager）</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BuildingIcon />
                <span className="font-bold text-white">ASDIQA</span>
              </div>
              <p className="text-sm">Bridging Innovation & Integrity</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Web Development</li>
                <li>Business Systems</li>
                <li>E-Commerce</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Team</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm">Tokyo, Japan</p>
              <p className="text-sm">asdiqa@example.com</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            © 2025 Asdiqa Co. Ltd. — All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
