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

function App() {
  const [activeTab, setActiveTab] = React.useState('home');
  
  const projects = [
    {
      id: 1,
      title: "RS Transport Solution",
      category: "Transportation Management System",
      description: "Real-time school transportation tracking system with live notifications for parents. Features GPS integration, route optimization, and instant alerts for parents about their child's commute status.",
      image: "https://via.placeholder.com/600x400/1e293b/ffffff?text=RS+Transport+Solution",
      technologies: ["React", "Real-time GPS", "Push Notifications", "Route Optimization"],
      link: "https://shayban-nasif.github.io/maktab-transport-system/",
      status: "ongoing",
      type: "system",
      client: "Iqra International School Tokyo",
      features: [
        "Real-time vehicle tracking",
        "Parent notifications",
        "Route management",
        "Student check-in/out",
        "Live updates dashboard"
      ]
    },
    {
      id: 2,
      title: "Maktab Management System",
      category: "Educational Institution Management",
      description: "Comprehensive school management platform handling student records, attendance, grades, and communication between teachers and parents. Streamlines administrative tasks for educational institutions.",
      image: "https://via.placeholder.com/600x400/0f172a/ffffff?text=Maktab+Management+System",
      technologies: ["Full-stack", "Database Management", "User Roles", "Reporting", "Analytics"],
      link: "http://gakuin.makkimasjid.jp/",
      status: "live",
      type: "system",
      features: [
        "Student information system",
        "Attendance tracking",
        "Grade management",
        "Parent-teacher communication",
        "Academic reporting"
      ]
    },
    {
      id: 3,
      title: "Dr. Nabina Rahman - Professional Blog",
      category: "Content Management System",
      description: "Elegant professional blog platform with custom CMS, article management, and responsive design. Currently in customer review stage, showcasing professional content with modern UI/UX.",
      image: "https://via.placeholder.com/600x400/334155/ffffff?text=Medical+Professional+Blog",
      technologies: ["React", "CMS Integration", "Responsive Design", "SEO Optimized", "Analytics"],
      link: "https://shayban-nasif.github.io/DrNabinaRahmanBlog/",
      status: "review",
      type: "consumer",
      features: [
        "Article publishing system",
        "Category management",
        "Search functionality",
        "Mobile responsive design",
        "SEO optimization"
      ]
    }
  ];

  const [filter, setFilter] = React.useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'live':
        return <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1"><CheckIcon /> LIVE</span>;
      case 'ongoing':
        return <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center gap-1"><ClockIcon /> ONGOING</span>;
      case 'review':
        return <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">REVIEW</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* Header with Navigation */}
      <header className="bg-slate-900 text-white py-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
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
              <button
                onClick={() => setActiveTab('home')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'home' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                  activeTab === 'portfolio' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <CodeIcon />
                Portfolio
              </button>
              <button
                onClick={() => setActiveTab('company')}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === 'company' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                Company
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Home Tab */}
      {activeTab === 'home' && (
        <>
          {/* Hero */}
          <section className="bg-slate-800 text-white py-20 px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Bridging Innovation & Integrity
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Asdiqa Co. Ltd. is a multi-disciplinary holding company focused on
              sustainable growth across technology, automotive, and service sectors.
            </p>
          </section>

          {/* Domains */}
          <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
                    <GlobeIcon />
                  </div>
                  <h4 className="text-xl font-bold">Software Solutions</h4>
                </div>
                <p className="text-slate-600">
                  Enterprise-level software architecture, homepage designing, and brand establishment support.
                </p>
              </div>

              <div className="bg-white p-8 border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-lg">
                    <CpuIcon />
                  </div>
                  <h4 className="text-xl font-bold">Global Trading</h4>
                </div>
                <p className="text-slate-600">
                  Export and import of automotive parts, electronics, and machinery.
                </p>
              </div>

              <div className="md:col-span-2 bg-slate-900 text-white p-10 rounded-xl flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                  <SunIcon />
                </div>
                
                <div>
                  <h4 className="text-3xl font-bold mb-2">Rising Sun Services</h4>
                  <p className="text-slate-300 max-w-lg">
                    Our consumer-facing brand delivers premium services.
                  </p>
                </div>
                
                <a
                  href="https://risingsunservices.jp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg flex items-center gap-2 hover:bg-slate-100 transition"
                >
                  Visit Website <ArrowRightIcon />
                </a>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="bg-white py-16 border-t">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-slate-600">Years of Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-slate-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </section>
        </>
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
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'all' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('system')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'system' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border'
              }`}
            >
              Enterprise Systems
            </button>
            <button
              onClick={() => setFilter('consumer')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'consumer' 
                  ? 'bg-slate-900 text-white' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border'
              }`}
            >
              Consumer Solutions
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="relative h-48 bg-slate-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(project.status)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {project.type === 'system' && <DatabaseIcon />}
                    {project.type === 'consumer' && <GlobeIcon />}
                    <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  
                  {/* Client info */}
                  {project.client && (
                    <p className="text-sm text-slate-500 mb-2 flex items-center gap-1">
                      <span className="font-medium">Client:</span> {project.client}
                    </p>
                  )}
                  
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  {/* Features List */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {project.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 4 && (
                        <li className="text-xs text-slate-400 mt-1">+{project.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
                  >
                    View Project <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-12 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's bring your ideas to life with our expert development team
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Start Your Project <ArrowRightIcon />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Company Tab */}
      {activeTab === 'company' && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-10 text-center">
              About Us / 会社概要
            </h3>

            <div className="overflow-hidden border rounded-lg">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <tbody>
                  <tr className="border-b">
                    <th className="w-1/3 bg-slate-100 px-6 py-4 font-medium">
                      会社名
                    </th>
                    <td className="px-6 py-4">
                      アスディカ―株式会社
                    </td>
                  </tr>

                  <tr className="border-b">
                    <th className="bg-slate-100 px-6 py-4 font-medium">
                      代表者
                    </th>
                    <td className="px-6 py-4">
                      フセイン・モハメドザキル
                    </td>
                  </tr>

                  <tr className="border-b">
                    <th className="bg-slate-100 px-6 py-4 font-medium">
                      所在地
                    </th>
                    <td className="px-6 py-4">
                      東京都葛飾区お花茶屋二丁目2-20-107号
                    </td>
                  </tr>

                  <tr className="border-b">
                    <th className="bg-slate-100 px-6 py-4 font-medium">
                      設立日
                    </th>
                    <td className="px-6 py-4">
                      令和7年9月29日
                    </td>
                  </tr>

                  <tr className="border-b">
                    <th className="bg-slate-100 px-6 py-4 font-medium">
                      会社法人等番号
                    </th>
                    <td className="px-6 py-4">
                      0118-01-046844
                    </td>
                  </tr>

                  <tr className="border-b align-top">
                    <th className="bg-slate-100 px-6 py-4 font-medium">
                      事業内容
                    </th>
                    <td className="px-6 py-4 space-y-1">
                      <div>・ITビジネスコンサルティング</div>
                      <div>・システム開発支援</div>
                      <div>・パソコン・電子機器の仕入れ・販売</div>
                      <div>・スパイス・食品等の小規模物販</div>
                    </td>
                  </tr>

                  <tr className="border-b">
                    <th className="bg-slate-100 px-6 py-4 font-medium">
                      ウェブサイト
                    </th>
                    <td className="px-6 py-4">
                      <a
                        href="https://www.asdiqa.jp"
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        www.asdiqa.jp
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th className="bg-slate-100 px-6 py-4 font-medium">
                      担当者
                    </th>
                    <td className="px-6 py-4">
                      シャイバン・ナシフ（Business Development Manager）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Additional Company Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">Our Mission</h4>
                <p className="text-slate-600">
                  To deliver innovative technology solutions that drive business growth and create lasting value for our clients across Japan and globally.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold mb-4">Our Vision</h4>
                <p className="text-slate-600">
                  To be the leading technology partner for businesses seeking digital transformation and sustainable growth in the modern era.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-100 py-8 text-center text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-6">
          <p>© 2025 Asdiqa Co. Ltd. — Tokyo, Japan</p>
          <p className="mt-2">Developed with ❤️ by our team</p>
        </div>
      </footer>
    </div>
  );
}

// Make sure ReactDOM is available
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
