const { useState, useEffect } = React;

const BuildingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M3 21h18M6 21V3h12v18M9 9h6M9 13h6M9 17h6" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M5 17H3a2 2 0 01-2-2v-4a2 2 0 012-2h1.38l2.12-5h11l2.12 5H21a2 2 0 012 2v4a2 2 0 01-2 2h-2" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="16.5" cy="17.5" r="1.5" />
  </svg>
);

const ChipIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="7" y="7" width="10" height="10" rx="1" />
    <path d="M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600",
      domain: "Software System Development",
      title: "Building Systems That Drive Business",
      subtitle: "Custom software, enterprise solutions, and digital transformation"
    },
    {
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1600",
      domain: "Car Trading",
      title: "Quality Vehicles, Global Reach",
      subtitle: "Import, export, and consulting for automobiles across international markets"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
      domain: "Electronics Trading",
      title: "Technology Products, Trusted Supply",
      subtitle: "Consumer and industrial electronics, bridging manufacturers to markets"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* Header */}
      <header className="bg-slate-900 text-white py-5 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-blue-400">
              <BuildingIcon />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wider">ASDIQA CO. LTD.</h1>
              <p className="text-xs text-slate-400 tracking-widest">アスディカ株式会社</p>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hidden md:block hover:text-white transition">About</a>
            <a href="#domains" className="hidden md:block hover:text-white transition">Domains</a>
            <a href="#company" className="hidden md:block hover:text-white transition">Company</a>
            <a
              href="https://risingsunservices.jp"
              target="_blank"
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition text-xs border border-blue-700 hover:border-blue-400 rounded px-3 py-1.5"
            >
              Rising Sun Services <ExternalLinkIcon />
            </a>
          </nav>
        </div>
      </header>

      <main>

        {/* Hero Slider */}
        <div className="relative h-[600px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={slide.image} className="w-full h-full object-cover" alt={slide.domain} />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 to-slate-900/50 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                  <div className="max-w-2xl">
                    <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
                      {slide.domain}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{slide.title}</h1>
                    <p className="text-xl text-slate-300 mb-8">{slide.subtitle}</p>
                    <a
                      href="#domains"
                      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition transform hover:scale-105 inline-flex items-center gap-2"
                    >
                      Explore Our Domains <ArrowRightIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/40 w-3 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </div>

        {/* About Asdiqa */}
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to Asdiqa Co. Ltd.</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-6">
            A Tokyo-based multi-domain company operating at the intersection of technology, trade, and innovation.
            We build software systems, facilitate global automobile trade, and bridge electronics supply chains —
            bringing integrity and expertise to every business we touch.
          </p>
          <p className="text-slate-500 leading-relaxed">
            Founded with a vision to bridge Japan's precision and global markets, Asdiqa operates across
            three core domains under one trusted umbrella — backed by years of hands-on industry experience.
          </p>
        </section>

        {/* Core Domains */}
        <section id="domains" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-3">Our Core Domains</h3>
            <p className="text-slate-500 text-center mb-12">Three business pillars. One company vision.</p>
            <div className="grid md:grid-cols-3 gap-8">

              {/* Software */}
              <div className="group rounded-2xl border border-slate-200 p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <CodeIcon />
                </div>
                <h4 className="text-xl font-bold mb-3">Software System Development</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We design and build custom software systems — from web applications and enterprise platforms
                  to workflow automation and end-to-end IT consulting.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {["Custom Web & Mobile Apps", "Enterprise System Integration", "IT Consulting & Strategy", "Business Process Automation"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Car Trading */}
              <div className="group rounded-2xl border border-slate-200 p-8 hover:border-slate-500 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-700 group-hover:text-white transition-all duration-300">
                  <CarIcon />
                </div>
                <h4 className="text-xl font-bold mb-3">Car Trading</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  International automobile trade with a focus on quality, compliance, and transparency.
                  Connecting buyers and sellers across Japan and global markets.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {["Vehicle Import & Export", "Used Car Sourcing in Japan", "Trade Documentation & Compliance", "Market Consulting"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Electronics */}
              <div className="group rounded-2xl border border-slate-200 p-8 hover:border-indigo-400 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <ChipIcon />
                </div>
                <h4 className="text-xl font-bold mb-3">Electronics Trading</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Sourcing, distribution, and supply of consumer and industrial electronics.
                  Reliable supply chain partnerships across Asia and beyond.
                </p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {["Consumer Electronics", "Industrial Components", "Supply Chain Management", "B2B Trade Partnerships"].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                ["3", "Core Business Domains"],
                ["50+", "Projects & Trade Deals"],
                ["5+", "Years Experience"],
                ["Tokyo", "Headquarters, Japan"]
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{num}</div>
                  <div className="text-slate-300 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rising Sun Services — subtle brand section */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-10">
              <div className="flex-1">
                <span className="text-xs text-blue-500 font-semibold uppercase tracking-widest">Our Technology Brand</span>
                <h3 className="text-2xl font-bold mt-2 mb-3">Rising Sun Services</h3>
                <p className="text-slate-600 leading-relaxed">
                  Rising Sun Services is the dedicated IT services brand under Asdiqa Co. Ltd., delivering
                  software solutions and technology consulting to businesses and institutions across Japan.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://risingsunservices.jp"
                  target="_blank"
                  className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-700 transition inline-flex items-center gap-2"
                >
                  Visit Website <ExternalLinkIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section id="company" className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-center">Company Information / 会社概要</h3>
            <div className="overflow-hidden border rounded-xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {[
                    ["Company Name", "アスディカ株式会社 / Asdiqa Co. Ltd."],
                    ["Representative", "フセイン・モハメドザキル"],
                    ["Location", "東京都葛飾区お花茶屋二丁目2-20-107号"],
                    ["Established", "令和7年9月29日"],
                    ["Business Domains", ["Software System Development", "Car Trading", "Electronics Trading"]]
                  ].map(([label, value], i) => (
                    <tr key={i} className="border-b last:border-0">
                      <th className="w-1/3 bg-slate-50 px-6 py-4 font-semibold text-slate-700">{label}</th>
                      <td className="px-6 py-4">
                        {Array.isArray(value)
                          ? <div className="space-y-1">{value.map(v => <div key={v} className="text-slate-600">・{v}</div>)}</div>
                          : <span className="text-slate-600">{value}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-400">
                <BuildingIcon />
                <span className="font-bold text-white text-lg">ASDIQA</span>
              </div>
              <p className="text-sm">Bridging Innovation & Integrity</p>
              <p className="text-xs mt-2 text-slate-500">アスディカ株式会社</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Our Domains</h4>
              <ul className="space-y-2 text-sm">
                <li>Software System Development</li>
                <li>Car Trading</li>
                <li>Electronics Trading</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Our Brands</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://risingsunservices.jp"
                    target="_blank"
                    className="hover:text-white transition"
                  >
                    Rising Sun Services ↗
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm">Tokyo, Japan</p>
              <p className="text-sm mt-1">info@asdiqa.jp</p>
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
