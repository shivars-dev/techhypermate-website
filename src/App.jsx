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
          <span className="text-cyan-400 sm:whitespace-nowrap">
            [ INTO <span className="block sm:inline">HYPERAUTOMATION ]</span>
          </span>
        </h1>

        <p className="mt-8 text-lg text-gray-300 max-w-2xl">
          Enterprise hyperautomation engineered to scale.<br />
          We combine Power Platform, AI, and event-driven integrations<br />
          to orchestrate intelligent operations across complex enterprises.
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
        <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Automation Capabilities</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Power Platform & Copilot Automation",
              icon: "⚡",
              description: "Secure, AI-enabled automation built on Microsoft Power Platform."
            },
            {
              title: "Enterprise Hyperautomation Architecture",
              icon: "🏗️",
              description: "Scalable automation ecosystems combining AI, low-code, and pro-code."
            },
            {
              title: "Event-Driven & API Integrations",
              icon: "🔗",
              description: "Real-time system integration using APIs and event-driven architectures."
            },
            {
              title: "AI & Intelligent Document Processing",
              icon: "🧠",
              description: "AI-driven document automation for faster, smarter operations."
            },
            {
              title: "Automation Governance & COE Enablement",
              icon: "🛡️",
              description: "Enterprise governance frameworks for controlled, scalable automation."
            },
            {
              title: "Logistics & Operations Automation",
              icon: "🚚",
              description: "End-to-end automation for logistics and operational workflows."
            }
          ].map(service => (
            <div
              key={service.title}
              className="p-8 rounded-2xl bg-slate-900 hover:border-cyan-400 border border-transparent transition"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POWER PLATFORM AUTOMATION SPECTRUM */}
      <section className="px-10 py-24 bg-gradient-to-b from-slate-900/50 to-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Power Platform Automation Spectrum</h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            A unified spectrum combining visual development, AI-native app generation,
            custom engineering, and conversational intelligence.
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                title: "No Code",
                description: "Visual, drag-and-drop app creation for simple business scenarios with no programming required.",
                icon: "⚡"
              },
              {
                title: "Low Code",
                description: "Flexible app development using visual design and formula-based logic to support scalable business needs.",
                icon: "🔧"
              },
              {
                title: "Vibe Code",
                description: "AI-native app development where natural language generates full applications, including data models and logic.",
                icon: "✨"
              },
              {
                title: "Pro Code",
                description: "Custom cloud-native development using APIs, events, and programming languages for complex, enterprise scenarios.",
                icon: "💻"
              },
              {
                title: "Copilot Studio",
                description: "Build and manage conversational AI agents that interact with users and automate tasks across enterprise systems.",
                icon: "🤖"
              }
            ].map(level => (
              <div
                key={level.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:border-cyan-400 border border-slate-700 transition"
              >
                <div className="text-4xl mb-3">{level.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                  {level.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOGISTICS & SUPPLY CHAIN AUTOMATION */}
      <section className="px-10 py-24 bg-gradient-to-b from-slate-900/50 to-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Logistics & Supply Chain Automation</h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            We automate complex logistics workflows where visibility,
            timeliness, and exception handling are mission-critical.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Shipment & Milestone Tracking",
                description: "Real-time tracking across carriers, ports, and hubs.",
                icon: "📍"
              },
              {
                title: "Exception & Delay Intelligence",
                description: "AI-driven identification of delays and operational risks.",
                icon: "⚠️"
              },
              {
                title: "Document & Compliance Automation",
                description: "Automated processing of shipping and compliance documents.",
                icon: "📄"
              },
              {
                title: "Event-Driven Logistics Integration",
                description: "Event-based workflows using APIs and streaming platforms.",
                icon: "⚡"
              }
            ].map(solution => (
              <div
                key={solution.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 hover:border-cyan-400 border border-cyan-700/50 transition"
              >
                <div className="text-4xl mb-3">{solution.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYPERAUTOMATION LIFECYCLE */}
      <section className="px-10 py-24 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Hyperautomation Lifecycle</h2>
          
          <div className="grid md:grid-cols-6 gap-4 items-stretch">
            {[
              {
                title: "Discover",
                description: "Identify high-impact processes and automation opportunities.",
                step: "01"
              },
              {
                title: "Design",
                description: "Architect secure, scalable automation solutions.",
                step: "02"
              },
              {
                title: "Build",
                description: "Implement using low-code, AI, and pro-code where required.",
                step: "03"
              },
              {
                title: "Integrate",
                description: "Connect systems through APIs and event-driven patterns.",
                step: "04"
              },
              {
                title: "Govern",
                description: "Apply security, compliance, and lifecycle controls.",
                step: "05"
              },
              {
                title: "Optimize",
                description: "Continuously improve using insights and performance data.",
                step: "06"
              }
            ].map((phase, index) => (
              <div key={phase.title} className="flex flex-col h-full">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 hover:border-cyan-400 border border-cyan-700/50 transition flex flex-col justify-start h-full">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{phase.step}</div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR ENTERPRISE LEADERSHIP */}
      <section className="px-10 py-24 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Built for Enterprise Leadership</h2>
          <p className="text-gray-300 text-center mb-10 leading-relaxed">
            TECHHYPERMATE partners with CIOs and Heads of Automation
            to deliver secure, governable, and scalable automation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Enterprise Security & Compliance",
              "COE & Governance Frameworks",
              "Scalable Architecture"
            ].map(bullet => (
              <div key={bullet} className="flex items-center gap-3 p-4 rounded-lg bg-black/30 border border-cyan-700/30">
                <span className="text-cyan-400 font-bold text-lg">•</span>
                <p className="text-gray-300 font-semibold text-sm">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-24 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About TECHHYPERMATE</h2>
        <p className="text-gray-300 leading-relaxed">
          TECHHYPERMATE is an enterprise hyperautomation consultancy.
          We help organizations move beyond fragmented automation into
          unified, intelligent ecosystems using Power Platform, AI,
          and event-driven integrations — with a focus on scale,
          governance, and long-term value.
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
