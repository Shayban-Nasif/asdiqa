const { useState, useEffect } = React;

function BuildingIcon() {
  return React.createElement("svg", { className: "w-8 h-8 text-blue-400", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M3 21h18M6 21V3h12v18M9 9h6M9 13h6M9 17h6" })
  );
}

function GlobeIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("path", { d: "M2 12h20M12 2a15 15 0 010 20" })
  );
}

function CpuIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2" }),
    React.createElement("path", { d: "M9 9h6v6H9z" })
  );
}

function SunIcon() {
  return React.createElement("svg", { className: "w-64 h-64", fill: "none", stroke: "currentColor", strokeWidth: "1", viewBox: "0 0 24 24" },
    React.createElement("circle", { cx: "12", cy: "12", r: "5" })
  );
}

function ArrowRightIcon() {
  return React.createElement("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M5 12h14M13 5l7 7-7 7" })
  );
}

function CodeIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" })
  );
}

function ExternalLinkIcon() {
  return React.createElement("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" })
  );
}

function MobileIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
    React.createElement("path", { d: "M12 18h.01" })
  );
}

function DatabaseIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }),
    React.createElement("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
    React.createElement("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
  );
}

function ClockIcon() {
  return React.createElement("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("path", { d: "M12 6v6l4 2" })
  );
}

function CheckIcon() {
  return React.createElement("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M20 6L9 17l-5-5" })
  );
}

function ShoppingCartIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("circle", { cx: "9", cy: "21", r: "1" }),
    React.createElement("circle", { cx: "20", cy: "21", r: "1" }),
    React.createElement("path", { d: "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" })
  );
}

function ChartIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M21 21H4V4" }),
    React.createElement("path", { d: "M7 15l3-3 3 3 5-5" })
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: GlobeIcon,
      title: "Webpage/Homepage Design",
      price: "50,000 Yen ~",
      description: "Professional, responsive website design tailored to your brand",
      features: ["Responsive Design", "SEO Optimized", "5 Pages Included", "Contact Form"]
    },
    {
      icon: DatabaseIcon,
      title: "Business Management System",
      price: "200,000 Yen ~",
      description: "Comprehensive system to streamline your business operations",
      features: ["Inventory Management", "Employee Tracking", "Report Generation", "Analytics Dashboard"]
    },
    {
      icon: ChartIcon,
      title: "Educational Management System",
      price: "200,000 Yen ~",
      description: "Complete solution for schools and educational institutions",
      features: ["Student Records", "Attendance System", "Grade Management", "Parent Portal"]
    },
    {
      icon: ShoppingCartIcon,
      title: "E-Commerce Site Development",
      price: "500,000 Yen ~",
      description: "Full-featured online store with payment integration",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"]
    }
  ];

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
      title: "Dr. Nabina Rahman - Blog",
      category: "Content Management System",
      description: "Elegant professional blog platform with custom CMS and responsive design.",
      image: "https://via.placeholder.com/600x400/334155/ffffff?text=Medical+Professional+Blog",
      technologies: ["React", "CMS Integration", "SEO Optimized"],
      link: "https://shayban-nasif.github.io/DrNabinaRahmanBlog/",
      status: "review",
      type: "consumer"
    }
  ];

  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.type === filter);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'live':
        return React.createElement("span", { className: "px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1" },
          React.createElement(CheckIcon, null), " LIVE"
        );
      case 'ongoing':
        return React.createElement("span", { className: "px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center gap-1" },
          React.createElement(ClockIcon, null), " ONGOING"
        );
      case 'review':
        return React.createElement("span", { className: "px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full" }, "REVIEW");
      default:
        return null;
    }
  };

  // Header Component
  const Header = () => {
    return React.createElement("header", { className: "bg-slate-900 text-white py-6 sticky top-0 z-50" },
      React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
        React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4" },
          React.createElement("div", { className: "flex items-center gap-3" },
            React.createElement(BuildingIcon, null),
            React.createElement("div", null,
              React.createElement("h1", { className: "text-2xl font-bold tracking-wider" }, "ASDIQA CO. LTD."),
              React.createElement("p", { className: "text-xs text-slate-400 tracking-widest uppercase" }, "アスディカー株式会社")
            )
          ),
          React.createElement("nav", { className: "flex gap-2" },
            ["home", "services", "portfolio", "company"].map(tab => 
              React.createElement("button", {
                key: tab,
                onClick: () => setActiveTab(tab),
                className: `px-4 py-2 rounded-lg transition flex items-center gap-2 ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`
              }, tab === "portfolio" ? [React.createElement(CodeIcon, { key: "icon" }), tab.charAt(0).toUpperCase() + tab.slice(1)] : tab.charAt(0).toUpperCase() + tab.slice(1))
            )
          )
        )
      )
    );
  };

  // Footer Component
  const Footer = () => {
    return React.createElement("footer", { className: "bg-slate-900 text-slate-400 py-12" },
      React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
        React.createElement("div", { className: "grid md:grid-cols-4 gap-8" },
          React.createElement("div", null,
            React.createElement("div", { className: "flex items-center gap-2 mb-4" },
              React.createElement(BuildingIcon, null),
              React.createElement("span", { className: "font-bold text-white" }, "ASDIQA")
            ),
            React.createElement("p", { className: "text-sm" }, "Bridging Innovation & Integrity")
          ),
          React.createElement("div", null,
            React.createElement("h4", { className: "font-bold text-white mb-4" }, "Services"),
            React.createElement("ul", { className: "space-y-2 text-sm" },
              ["Web Development", "Business Systems", "E-Commerce", "Consulting"].map(item => 
                React.createElement("li", { key: item }, item)
              )
            )
          ),
          React.createElement("div", null,
            React.createElement("h4", { className: "font-bold text-white mb-4" }, "Company"),
            React.createElement("ul", { className: "space-y-2 text-sm" },
              ["About Us", "Portfolio", "Team", "Contact"].map(item => 
                React.createElement("li", { key: item }, item)
              )
            )
          ),
          React.createElement("div", null,
            React.createElement("h4", { className: "font-bold text-white mb-4" }, "Contact"),
            React.createElement("p", { className: "text-sm" }, "Tokyo, Japan"),
            React.createElement("p", { className: "text-sm" }, "info@asdiqa.jp")
          )
        ),
        React.createElement("div", { className: "border-t border-slate-800 mt-8 pt-8 text-center text-sm" },
          "© 2025 Asdiqa Co. Ltd. — All rights reserved"
        )
      )
    );
  };

  // Home Tab
  const HomeTab = () => {
    return React.createElement("div", null,
      // Hero Slider
      React.createElement("div", { className: "relative h-[600px] overflow-hidden" },
        slides.map((slide, index) => 
          React.createElement("div", { 
            key: index, 
            className: `absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}` 
          },
            React.createElement("img", { src: slide.image, className: "w-full h-full object-cover" }),
            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50 flex items-center" },
              React.createElement("div", { className: "max-w-7xl mx-auto px-6 text-white" },
                React.createElement("div", { className: "max-w-2xl" },
                  React.createElement("h1", { className: "text-5xl md:text-6xl font-bold mb-6" }, slide.title),
                  React.createElement("p", { className: "text-xl text-slate-300 mb-8" }, slide.subtitle),
                  React.createElement("div", { className: "flex gap-4" },
                    React.createElement("button", { 
                      onClick: () => setActiveTab('services'),
                      className: "px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition transform hover:scale-105"
                    }, "Our Services"),
                    React.createElement("button", { 
                      onClick: () => setActiveTab('portfolio'),
                      className: "px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg font-bold transition"
                    }, "View Portfolio")
                  )
                )
              )
            )
          )
        ),
        React.createElement("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2" },
          slides.map((_, index) => 
            React.createElement("button", {
              key: index,
              onClick: () => setCurrentSlide(index),
              className: `w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`
            })
          )
        )
      ),

      // Services Preview with Pricing
      React.createElement("section", { className: "py-20 px-6 max-w-7xl mx-auto" },
        React.createElement("div", { className: "text-center mb-12" },
          React.createElement("h2", { className: "text-4xl font-bold mb-4" }, "Our Development Services"),
          React.createElement("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto" },
            "Professional software solutions tailored to your business needs"
          )
        ),
        React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8" },
          services.map((service, index) => 
            React.createElement("div", { key: index, className: "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group" },
              React.createElement("div", { className: "bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white" },
                React.createElement("div", { className: "w-12 h-12 mb-4" }, React.createElement(service.icon, null)),
                React.createElement("h3", { className: "text-xl font-bold mb-1" }, service.title),
                React.createElement("div", { className: "text-2xl font-bold text-yellow-300" }, service.price)
              ),
              React.createElement("div", { className: "p-6" },
                React.createElement("p", { className: "text-slate-600 text-sm mb-4" }, service.description),
                React.createElement("ul", { className: "space-y-2" },
                  service.features.map((feature, i) => 
                    React.createElement("li", { key: i, className: "text-sm text-slate-600 flex items-center gap-2" },
                      React.createElement("span", { className: "w-1 h-1 bg-blue-600 rounded-full" }),
                      feature
                    )
                  )
                ),
                React.createElement("button", { 
                  onClick: () => setActiveTab('services'),
                  className: "mt-6 text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition"
                }, "Learn More", React.createElement(ArrowRightIcon, null))
              )
            )
          )
        )
      ),

      // Stats Section
      React.createElement("section", { className: "bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
          React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center" },
            [
              ["50+", "Projects Delivered"],
              ["15+", "Happy Clients"],
              ["5+", "Years Experience"],
              ["24/7", "Support"]
            ].map(([num, label]) => 
              React.createElement("div", { key: label },
                React.createElement("div", { className: "text-4xl font-bold text-blue-400 mb-2" }, num),
                React.createElement("div", { className: "text-slate-300" }, label)
              )
            )
          )
        )
      ),

      // Featured Projects
      React.createElement("section", { className: "py-20 px-6 max-w-7xl mx-auto" },
        React.createElement("div", { className: "text-center mb-12" },
          React.createElement("h2", { className: "text-4xl font-bold mb-4" }, "Featured Projects"),
          React.createElement("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto" },
            "Some of our recent work"
          )
        ),
        React.createElement("div", { className: "grid md:grid-cols-3 gap-8" },
          projects.slice(0, 3).map(project => 
            React.createElement("div", { key: project.id, className: "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group" },
              React.createElement("div", { className: "relative h-48 bg-slate-200 overflow-hidden" },
                React.createElement("img", { src: project.image, className: "w-full h-full object-cover group-hover:scale-105 transition duration-300" }),
                React.createElement("div", { className: "absolute top-4 right-4" }, getStatusBadge(project.status))
              ),
              React.createElement("div", { className: "p-6" },
                React.createElement("h3", { className: "text-xl font-bold mb-2" }, project.title),
                React.createElement("p", { className: "text-slate-600 text-sm mb-4" }, project.description),
                React.createElement("a", { 
                  href: project.link, 
                  target: "_blank", 
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                }, "View Project", React.createElement(ExternalLinkIcon, null))
              )
            )
          )
        ),
        React.createElement("div", { className: "text-center mt-12" },
          React.createElement("button", { 
            onClick: () => setActiveTab('portfolio'),
            className: "px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition inline-flex items-center gap-2"
          }, "View All Projects", React.createElement(ArrowRightIcon, null))
        )
      ),

      // CTA Banner
      React.createElement("section", { className: "bg-blue-600 py-16" },
        React.createElement("div", { className: "max-w-4xl mx-auto px-6 text-center text-white" },
          React.createElement("h2", { className: "text-3xl font-bold mb-4" }, "Ready to Start Your Project?"),
          React.createElement("p", { className: "text-xl text-blue-100 mb-8" }, "Get a free consultation and quote within 24 hours"),
          React.createElement("button", { 
            className: "px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-slate-100 transition transform hover:scale-105 inline-flex items-center gap-2"
          }, "Contact Us Today", React.createElement(ArrowRightIcon, null))
        )
      )
    );
  };

  // Services Tab
  const ServicesTab = () => {
    return React.createElement("section", { className: "py-20 px-6 max-w-7xl mx-auto" },
      React.createElement("div", { className: "text-center mb-16" },
        React.createElement("h2", { className: "text-4xl font-bold mb-4" }, "Our Services"),
        React.createElement("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto" },
          "Comprehensive development solutions for your business"
        )
      ),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8" },
        services.map((service, index) => 
          React.createElement("div", { key: index, className: "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition" },
            React.createElement("div", { className: "bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white" },
              React.createElement("div", { className: "w-16 h-16 mb-4" }, React.createElement(service.icon, null)),
              React.createElement("h3", { className: "text-2xl font-bold mb-2" }, service.title),
              React.createElement("div", { className: "text-3xl font-bold text-yellow-300" }, service.price)
            ),
            React.createElement("div", { className: "p-8" },
              React.createElement("p", { className: "text-slate-600 mb-6" }, service.description),
              React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                service.features.map((feature, i) => 
                  React.createElement("div", { key: i, className: "flex items-center gap-2" },
                    React.createElement("span", { className: "w-2 h-2 bg-blue-600 rounded-full" }),
                    React.createElement("span", { className: "text-sm text-slate-600" }, feature)
                  )
                )
              ),
              React.createElement("div", { className: "mt-8 p-4 bg-slate-50 rounded-lg" },
                React.createElement("p", { className: "text-sm text-slate-600" },
                  React.createElement("span", { className: "font-bold" }, "Note:"), " Final pricing depends on specific requirements and project scope."
                )
              )
            )
          )
        )
      )
    );
  };

  // Portfolio Tab
  const PortfolioTab = () => {
    return React.createElement("section", { className: "py-16 px-6 max-w-7xl mx-auto" },
      React.createElement("div", { className: "text-center mb-12" },
        React.createElement("h2", { className: "text-4xl font-bold mb-4" }, "Our Portfolio"),
        React.createElement("p", { className: "text-xl text-slate-600 max-w-2xl mx-auto" },
          "Showcasing our finest work in web development, enterprise systems, and digital solutions"
        )
      ),
      React.createElement("div", { className: "flex flex-wrap justify-center gap-4 mb-12" },
        [
          { label: "All Projects", value: "all" },
          { label: "Enterprise Systems", value: "system" },
          { label: "Consumer Solutions", value: "consumer" }
        ].map(btn => 
          React.createElement("button", {
            key: btn.value,
            onClick: () => setFilter(btn.value),
            className: `px-6 py-2 rounded-full font-medium transition ${
              filter === btn.value 
                ? 'bg-slate-900 text-white' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border'
            }`
          }, btn.label)
        )
      ),
      React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8" },
        filteredProjects.map(project => 
          React.createElement("div", { key: project.id, className: "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group" },
            React.createElement("div", { className: "relative h-48 bg-slate-200 overflow-hidden" },
              React.createElement("img", { src: project.image, className: "w-full h-full object-cover group-hover:scale-105 transition duration-300" }),
              React.createElement("div", { className: "absolute top-4 right-4" }, getStatusBadge(project.status))
            ),
            React.createElement("div", { className: "p-6" },
              React.createElement("div", { className: "flex items-center gap-2 mb-2" },
                project.type === 'system' && React.createElement(DatabaseIcon, null),
                project.type === 'consumer' && React.createElement(GlobeIcon, null),
                React.createElement("span", { className: "text-sm font-medium text-blue-600 uppercase tracking-wider" }, project.category)
              ),
              React.createElement("h3", { className: "text-xl font-bold mb-2" }, project.title),
              project.client && React.createElement("p", { className: "text-sm text-slate-500 mb-2" }, "Client: ", project.client),
              React.createElement("p", { className: "text-slate-600 mb-4" }, project.description),
              React.createElement("div", { className: "flex flex-wrap gap-2 mb-4" },
                project.technologies.map((tech, index) => 
                  React.createElement("span", { key: index, className: "px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded" }, tech)
                )
              ),
              React.createElement("a", { 
                href: project.link, 
                target: "_blank", 
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
              }, "View Project", React.createElement(ExternalLinkIcon, null))
            )
          )
        )
      )
    );
  };

  // Company Tab
  const CompanyTab = () => {
    return React.createElement("section", { className: "py-20 px-6 bg-white" },
      React.createElement("div", { className: "max-w-5xl mx-auto" },
        React.createElement("h3", { className: "text-3xl font-bold mb-10 text-center" }, "About Us / 会社概要"),
        React.createElement("div", { className: "overflow-hidden border rounded-lg" },
          React.createElement("table", { className: "w-full text-left border-collapse text-sm md:text-base" },
            React.createElement("tbody", null,
              [
                ["会社名", "アスディカ―株式会社"],
                ["代表者", "フセイン・モハメドザキル"],
                ["所在地", "東京都葛飾区お花茶屋二丁目2-20-107号"],
                ["設立日", "令和7年9月29日"],
                ["会社法人等番号", "0118-01-046844"],
                ["事業内容", ["・ITビジネスコンサルティング", "・システム開発支援", "・パソコン・電子機器の仕入れ・販売", "・スパイス・食品等の小規模物販"]],
                ["ウェブサイト", React.createElement("a", { href: "https://www.asdiqa.jp", target: "_blank", className: "text-blue-600 underline" }, "www.asdiqa.jp")],
                ["担当者", "シャイバン・ナシフ（Business Development Manager）"]
              ].map(([label, value], i) => 
                React.createElement("tr", { key: i, className: "border-b" },
                  React.createElement("th", { className: "w-1/3 bg-slate-100 px-6 py-4 font-medium" }, label),
                  React.createElement("td", { className: "px-6 py-4" }, 
                    Array.isArray(value) 
                      ? React.createElement("div", { className: "space-y-1" }, value.map((v, j) => React.createElement("div", { key: j }, v)))
                      : value
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  return React.createElement("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-800" },
    React.createElement(Header, null),
    React.createElement("main", { className: "flex-grow" },
      activeTab === 'home' && React.createElement(HomeTab, null),
      activeTab === 'services' && React.createElement(ServicesTab, null),
      activeTab === 'portfolio' && React.createElement(PortfolioTab, null),
      activeTab === 'company' && React.createElement(CompanyTab, null)
    ),
    React.createElement(Footer, null)
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, null));
