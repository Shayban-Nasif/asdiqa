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

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <BuildingIcon />
            <div>
              <h1 className="text-2xl font-bold tracking-wider">ASDIQA CO. LTD.</h1>
              <p className="text-xs text-slate-400 tracking-widest uppercase">
                アスディカー株式会社
              </p>
            </div>
          </div>
        </div>
      </header>

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
            <div className="absolute right-0 top-0 opacity-10">
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
              className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg flex items-center gap-2"
            >
              Visit Website <ArrowRightIcon />
            </a>
          </div>
        </div>
      </section>
      {/* About Us / Company Information */}
<section className="py-20 px-6 bg-white border-t">
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

  </div>
</section>
      {/* Footer */}
      <footer className="bg-slate-100 py-8 text-center text-sm text-slate-500">
        © 2025 Asdiqa Co. Ltd. — Tokyo, Japan
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
