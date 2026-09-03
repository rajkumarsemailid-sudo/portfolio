import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Portfolio
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        {profile.name}
      </h1>
      <h2 className="mt-3 text-xl font-medium text-white/70 sm:text-2xl">
        {profile.title}
      </h2>
      {profile.location && (
        <p className="mt-2 text-sm text-white/40">{profile.location}</p>
      )}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
