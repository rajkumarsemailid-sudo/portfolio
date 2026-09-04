import { skillGroups, skillsHighlight } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Skills</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {skillsHighlight && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src={skillsHighlight.src}
            alt={skillsHighlight.caption}
            className="w-full object-contain"
          />
          <p className="border-t border-white/10 bg-white/5 px-6 py-3 text-sm text-white/60">
            {skillsHighlight.caption}
          </p>
        </div>
      )}
    </section>
  )
}
