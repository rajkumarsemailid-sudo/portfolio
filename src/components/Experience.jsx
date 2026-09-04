import { clients, experience } from '../data/content'

function ExperienceCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className={`grid gap-px bg-black/40 ${item.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
        {item.images.map((image) => (
          <div key={image.src} className="aspect-video w-full bg-black/40">
            <img
              src={image.src}
              alt={image.caption}
              title={image.caption}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3">
          {item.logo && (
            <img
              src={item.logo}
              alt={`${item.client} logo`}
              className="h-6 w-auto max-w-[120px] object-contain"
            />
          )}
          {item.secondaryLogo && (
            <img
              src={item.secondaryLogo}
              alt={`${item.client} logo`}
              className="h-6 w-auto max-w-[120px] object-contain"
            />
          )}
          <span className="text-sm font-medium uppercase tracking-wide text-white/50">
            {item.client}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{item.objective}</p>

        <ul className="mt-4 space-y-1.5">
          {item.scope.map((line) => (
            <li key={line} className="flex gap-2 text-sm leading-relaxed text-white/60">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/30" />
              {line}
            </li>
          ))}
        </ul>

        <h4 className="mt-5 text-xs font-semibold uppercase tracking-wide text-accent">
          Achievements
        </h4>
        <ul className="mt-2 space-y-1.5">
          {item.achievements.map((line) => (
            <li key={line} className="flex gap-2 text-sm leading-relaxed text-white/80">
              <span className="mt-1 text-accent">✓</span>
              {line}
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Experience</h2>

      {clients.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-white/40">
            Clients & Programs
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
            {clients.map((c) => (
              <img
                key={c.name}
                src={c.logo}
                alt={c.name}
                title={c.name}
                className="h-7 w-auto max-w-[120px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {experience.map((item) => (
          <ExperienceCard key={`${item.client}-${item.title}`} item={item} />
        ))}
      </div>
    </section>
  )
}
