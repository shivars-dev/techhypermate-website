import ClockLogo from "./components/ClockLogo";


export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center gap-4">
  <a href="/" className="flex items-center gap-4 cursor-pointer">
  <ClockLogo size={40} />

  <span className="text-xl font-semibold tracking-wide">
    TECHHYPERMATE
  </span>
</a>
</div>


        <div className="space-x-8 text-sm uppercase hidden md:block">
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-10 py-32 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          BEYOND AUTOMATION.<br />
          <span className="text-cyan-400">INTO HYPERAUTOMATION.</span>
        </h1>

        <p className="mt-8 text-lg text-gray-300 max-w-2xl">
          Enterprise-grade automation and hyperautomation solutions designed
          for scalability, governance, and intelligent operations.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 rounded-xl font-semibold"
          >
            Talk to Us
          </a>

          <a
            href="#services"
            className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-400 hover:text-black"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-10 py-24 bg-black/40">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Power Platform Automation",
            "Hyperautomation Architecture",
            "Integration & API Automation",
            "AI Document Automation",
            "Governance & COE Setup",
            "Cloud-Native Automation"
          ].map(service => (
            <div
              key={service}
              className="p-8 rounded-2xl bg-slate-900 hover:border-cyan-400 border border-transparent transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                {service}
              </h3>
              <p className="text-gray-400 text-sm">
                Secure, scalable, enterprise-ready automation solutions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About TECHHYPERMATE</h2>
        <p className="text-gray-300 leading-relaxed">
          TECHHYPERMATE helps enterprises evolve from task automation into
          fully orchestrated hyperautomation ecosystems using Power Platform,
          Azure integrations, APIs, and event-driven architectures.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-10 py-24 bg-gradient-to-r from-blue-900 to-cyan-700 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let’s Automate the Future</h2>
        <p className="mb-4">Reach out to start your automation journey.</p>

        <p className="mb-8 text-sm text-black/90">
          Email:{" "}
          <a
            href="mailto:shivagurunathanrs@techhypermate.com"
            className="underline font-medium"
          >
            shivagurunathanrs@techhypermate.com
          </a>
        </p>

        <a
          href="mailto:shivagurunathanrs@techhypermate.com"
          className="bg-black text-cyan-400 px-10 py-3 rounded-xl hover:bg-slate-900"
        >
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-400 bg-black">
        © 2026 TECHHYPERMATE. All rights reserved.
      </footer>

    </main>
  );
}
