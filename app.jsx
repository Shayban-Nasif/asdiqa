const { useState, useEffect } = React;

// Icons
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

function RobotIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("rect", { x: "3", y: "8", width: "18", height: "12", rx: "2" }),
    React.createElement("circle", { cx: "12", cy: "15", r: "2" }),
    React.createElement("path", { d: "M8 5h8M8 5v3M16 5v3" })
  );
}

function ShoppingCartIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("circle", { cx: "9", cy: "21", r: "1" }),
    React.createElement("circle", { cx: "20", cy: "21", r: "1" }),
    React.createElement("path", { d: "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" })
  );
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600",
      title: "Innovative IT Solutions",
      subtitle: "Empowering businesses through technology"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600",
      title: "Digital Transformation",
      subtitle: "Modern solutions for modern challenges"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600",
      title: "Expert Development",
      subtitle: "Bringing your ideas to life"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Header Component
  const Header = () => {
    return React.createElement("header", { className: "bg-slate-900 text-white py-6 sticky top-0 z-50" },
      React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
        React.createElement("div", { className: "flex justify-between items-center" },
          React.createElement("div", { className: "flex items-center gap-3" },
            React.createElement(BuildingIcon, null),
            React.createElement("div", null,
              React.createElement("h1", { className: "text-2xl font-bold tracking-wider" }, "ASDIQA CO. LTD."),
              React.createElement("p", { className: "text-xs text-slate-400 tracking-widest uppercase" }, "アスディカー株式会社")
            )
          ),
          React.createElement("a", { 
            href: "https://risingsunservices.jp", 
            target: "_blank",
            className: "px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition flex items-center gap-2"
          }, "Visit Rising Sun Services", React.createElement(ExternalLinkIcon, null))
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
            React.createElement("h4", { className: "font-bold text-white mb-4" }, "Our Brands"),
            React.createElement("ul", { className: "space-y-2 text-sm" },
              React.createElement("li", null, 
                React.createElement("a", { href: "https://risingsunservices.jp", target: "_blank", className: "hover:text-white transition" }, "Rising Sun Services")
              )
            )
          ),
          React.createElement("div", null,
            React.createElement("h4", { className: "font-bold text-white mb-4" }, "Company"),
            React.createElement("ul", { className: "space-y-2 text-sm" },
              ["About Us", "Contact"].map(item => 
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

  // Main Homepage
  return React.createElement("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-800" },
    React.createElement(Header, null),
    React.createElement("main", null,
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
                  React.createElement("a", { 
                    href: "https://risingsunservices.jp", 
                    target: "_blank",
                    className: "px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition transform hover:scale-105 inline-flex items-center gap-2"
                  }, "Explore Our IT Solutions", React.createElement(ArrowRightIcon, null))
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

      // Company Introduction
      React.createElement("section", { className: "py-20 px-6 max-w-4xl mx-auto text-center" },
        React.createElement("h2", { className: "text-4xl font-bold mb-6" }, "Welcome to Asdiqa Co. Ltd."),
        React.createElement("p", { className: "text-xl text-slate-600 leading-relaxed mb-8" },
          "We are a multi-disciplinary holding company focused on sustainable growth across technology sectors. ",
          "Through our consumer brand, Rising Sun Services, we deliver innovative IT solutions to businesses and educational institutions."
        ),
        React.createElement("div", { className: "flex justify-center gap-4" },
          React.createElement("a", { 
            href: "https://risingsunservices.jp", 
            target: "_blank",
            className: "px-8 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800 transition inline-flex items-center gap-2"
          }, "Discover Our IT Services", React.createElement(ArrowRightIcon, null))
        )
      ),

      // Featured Capabilities
      React.createElement("section", { className: "py-16 bg-white" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
          React.createElement("h3", { className: "text-3xl font-bold text-center mb-12" }, "Our Expertise at Rising Sun Services"),
          React.createElement("div", { className: "grid md:grid-cols-3 gap-8" },
            [
              {
                icon: CodeIcon,
                title: "Custom Software",
                desc: "Tailored web and mobile applications for your business needs"
              },
              {
                icon: ShoppingCartIcon,
                title: "E-Commerce Solutions",
                desc: "Full-featured online stores with payment integration"
              },
              {
                icon: RobotIcon,
                title: "Robotics Education",
                desc: "STEM courses for school children, teaching robotics and programming"
              }
            ].map((item, i) => 
              React.createElement("div", { key: i, className: "text-center p-6" },
                React.createElement("div", { className: "w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4" },
                  React.createElement(item.icon, null)
                ),
                React.createElement("h4", { className: "text-xl font-bold mb-2" }, item.title),
                React.createElement("p", { className: "text-slate-600" }, item.desc)
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

      // CTA to Rising Sun
      React.createElement("section", { className: "py-20 px-6" },
        React.createElement("div", { className: "max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white" },
          React.createElement("h3", { className: "text-3xl font-bold mb-4" }, "Ready to Build Your IT Solution?"),
          React.createElement("p", { className: "text-xl text-blue-100 mb-8" },
            "Visit Rising Sun Services for detailed pricing and project consultation"
          ),
          React.createElement("a", { 
            href: "https://risingsunservices.jp", 
            target: "_blank",
            className: "px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-slate-100 transition transform hover:scale-105 inline-flex items-center gap-2"
          }, "Go to Rising Sun Services", React.createElement(ExternalLinkIcon, null))
        )
      ),

      // Company Info
      React.createElement("section", { className: "py-20 px-6 bg-white" },
        React.createElement("div", { className: "max-w-5xl mx-auto" },
          React.createElement("h3", { className: "text-3xl font-bold mb-10 text-center" }, "Company Information / 会社概要"),
          React.createElement("div", { className: "overflow-hidden border rounded-lg" },
            React.createElement("table", { className: "w-full text-left border-collapse" },
              React.createElement("tbody", null,
                [
                  ["Company Name", "アスディカ―株式会社"],
                  ["Representative", "フセイン・モハメドザキル"],
                  ["Location", "東京都葛飾区お花茶屋二丁目2-20-107号"],
                  ["Established", "令和7年9月29日"],
                  ["Business", ["IT Consulting", "System Development", "IT Education", "Trading"]]
                ].map(([label, value], i) => 
                  React.createElement("tr", { key: i, className: "border-b" },
                    React.createElement("th", { className: "w-1/3 bg-slate-100 px-6 py-4 font-medium" }, label),
                    React.createElement("td", { className: "px-6 py-4" }, 
                      Array.isArray(value) 
                        ? React.createElement("div", { className: "space-y-1" }, value.map(v => React.createElement("div", { key: v }, "・" + v)))
                        : value
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(Footer, null)
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, null));
