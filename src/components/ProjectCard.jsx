import { useState } from 'react'

function MediaPreview({ project }) {
  if (project.videoId) {
    return (
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${project.videoId}`}
        title={`${project.title} demo`}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  if (project.images?.length) {
    return (
      <img
        src={project.images[0]}
        alt={`${project.title} screenshot`}
        className="h-full w-full object-cover object-top"
      />
    )
  }

  return (
    <div className="flex h-full w-full items-center justify-center text-sm text-white/40">
      Demo coming soon
    </div>
  )
}

export default function ProjectCard({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const images = project.images ?? []

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {images.length ? (
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="aspect-video w-full cursor-zoom-in bg-black/40"
        >
          <MediaPreview project={project} />
        </button>
      ) : (
        <div className="aspect-video w-full bg-black/40">
          <MediaPreview project={project} />
        </div>
      )}

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto p-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="h-14 w-24 flex-shrink-0 overflow-hidden rounded-md border border-white/10"
            >
              <img
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="h-full w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}

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

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <img
            src={images[lightboxIndex]}
            alt={`${project.title} screenshot ${lightboxIndex + 1}`}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </article>
  )
}
