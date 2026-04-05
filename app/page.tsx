const contact = {
  email: "kashika1949.be23@chitkara.edu.in",
  phone: "+91-8708372294",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

const sections = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
] as const;

export default function Home() {
  return (
    <div className="min-h-full">
      <header className="sticky top-0 z-10 border-b border-neutral-200/80 bg-[var(--background)]/90 backdrop-blur-md dark:border-neutral-800/80">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-6 py-4">
          <a href="/" className="font-semibold tracking-tight">
            Kashika
          </a>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-[var(--foreground)] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-20 pt-12">
        <section className="mb-16">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Computer Science &amp; Engineering · Chitkara University, Rajpura
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Kashika
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Software developer focused on enterprise applications, iOS, and
            scalable systems—from healthcare workflows at Infosys to a published
            App Store app.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3 text-sm">
            <li>
              <a
                className="inline-flex rounded-full border border-neutral-300 px-4 py-2 font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-900"
                href={`mailto:${contact.email}`}
              >
                Email
              </a>
            </li>
            <li>
              <a
                className="inline-flex rounded-full border border-neutral-300 px-4 py-2 font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-900"
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                className="inline-flex rounded-full border border-neutral-300 px-4 py-2 font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-900"
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="inline-flex rounded-full border border-neutral-300 px-4 py-2 font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-900"
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>

        <section id="summary" className="mb-16 scroll-mt-24">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Professional summary
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
            Software developer with enterprise application development experience
            from an Infosys internship, building role-based healthcare modules.
            Strong foundation in object-oriented programming, modular architecture,
            and Agile collaboration using Swift, Java, and JavaScript. Developed
            and published a role-based university event management iOS application
            (ClubHub) on the App Store. Interested in scalable enterprise
            applications, workflow automation, and system integration platforms.
          </p>
        </section>

        <section id="experience" className="mb-16 scroll-mt-24">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Experience
          </h2>
          <article className="mt-6 border-l-2 border-neutral-200 pl-6 dark:border-neutral-700">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold">
                Software Developer Intern (iOS) — Infosys Limited
              </h3>
              <time className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400">
                Dec 2025 – Jan 2026 · Mysore
              </time>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-neutral-700 dark:text-neutral-300">
              <li>
                Developed role-based modules for Admin, Patient, Doctor, and Lab
                Technician users within an enterprise Hospital Management System.
              </li>
              <li>
                Implemented REST API–driven UI workflows supporting AI-based
                healthcare chatbot interactions.
              </li>
              <li>
                Collaborated with backend teams to validate JSON responses and
                integration logic.
              </li>
              <li>
                Worked in Agile sprint cycles using Jira and Git version control.
              </li>
              <li>
                Applied MVVM architecture for scalable, maintainable application
                structure.
              </li>
            </ul>
          </article>
        </section>

        <section id="education" className="mb-16 scroll-mt-24">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Education
          </h2>
          <div className="mt-6">
            <h3 className="font-semibold">
              Bachelor of Engineering, Computer Science and Engineering
            </h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Chitkara University, Rajpura
            </p>
          </div>
        </section>

        <section id="skills" className="mb-16 scroll-mt-24">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Technical skills
          </h2>
          <dl className="mt-6 space-y-5">
            <SkillGroup
              title="Programming languages"
              items="Java, Swift, JavaScript, Python"
            />
            <SkillGroup
              title="Core concepts"
              items="Object-oriented programming, data structures & algorithms, DBMS, operating systems, software engineering"
            />
            <SkillGroup
              title="API & integration"
              items="REST APIs, JSON handling, client–server architecture, HTTP basics"
            />
            <SkillGroup
              title="Frameworks & tools"
              items="SwiftUI, React, Git, GitHub, Jira, VS Code"
            />
            <SkillGroup
              title="Cloud & databases"
              items="MySQL, basic AWS exposure"
            />
            <SkillGroup
              title="Architecture"
              items="MVVM, role-based workflow design, modular UI development"
            />
            <SkillGroup
              title="Enterprise & interests"
              items="Agile sprints, version control workflows, integration-oriented development; interests in enterprise apps, system integration, cloud platforms"
            />
          </dl>
        </section>

        <section id="projects" className="scroll-mt-24">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Projects
          </h2>
          <ul className="mt-6 space-y-10">
            <ProjectCard
              title="ClubHub"
              subtitle="University club event management · Swift · SwiftUI · MVVM"
              bullets={[
                "Role-based navigation for students and club administrators.",
                "Event lifecycle management and structured user flows.",
                "MVVM for scalable, maintainable UI; reusable modules for feature growth.",
                "WidgetKit, MapKit, and EventKit for reminders, maps, and event tracking.",
                "Published on the Apple App Store (end-to-end release lifecycle).",
              ]}
            />
            <ProjectCard
              title="Voyager"
              subtitle="Hotel booking web app · React · JavaScript · REST APIs"
              bullets={[
                "Booking workflows aligned with REST-based service architecture.",
                "Modular frontend components for scalable interaction handling.",
                "Improved usability through structured UI/UX workflow planning.",
              ]}
            />
            <ProjectCard
              title="Docker Manager UI"
              subtitle="Linux utility interface · React · Docker · Linux"
              bullets={[
                "UI for monitoring container workflows in a Linux environment.",
                "Modular structure for system-level interaction visibility.",
                "Layouts for container status tracking and management.",
              ]}
            />
          </ul>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Kashika</p>
      </footer>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string }) {
  return (
    <div>
      <dt className="font-medium text-[var(--foreground)]">{title}</dt>
      <dd className="mt-1 text-neutral-700 dark:text-neutral-300">{items}</dd>
    </div>
  );
}

function ProjectCard({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <li>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        {subtitle}
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-700 dark:text-neutral-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </li>
  );
}
