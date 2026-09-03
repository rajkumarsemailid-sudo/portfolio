import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Let's talk
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          Open to new opportunities and interesting problems. Reach out
          directly or find me on the links below.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110"
          >
            Email me
          </a>
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
          )}
          {profile.links.resume && (
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          )}
        </div>
      </div>
      <footer className="mt-16 text-center text-xs text-white/30">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  )
}
