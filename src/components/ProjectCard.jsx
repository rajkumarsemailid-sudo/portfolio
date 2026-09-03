export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="aspect-video w-full bg-black/40">
        {project.videoId ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${project.videoId}`}
            title={`${project.title} demo`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-white/40">
            Demo video coming soon
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>
        {(project.links?.repo || project.links?.live) && (
          <div className="mt-4 flex gap-4 text-sm">
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Code
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Live
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
